import React, { useState, useEffect, useRef } from 'react';
import { Chat, GenerateContentResponse } from '@google/genai';
import type { Message } from '../../types/chat';
import { MessageRole } from '../../types/chat';
import { createChatSession } from '../../services/geminiService';
import ChatMessage from './ChatMessage';
import { SendIcon, CloseIcon, BotIcon } from './IconComponents';
import { marked } from 'marked';
import styles from './scss/_chatbot.module.scss';

// Simple unique ID generator to avoid external dependencies
const simpleUUID = () => `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        const chatSession = createChatSession();
        setChat(chatSession);
        const welcomeMessage = "Hello! I'm the EcoModular AI Assistant. How can I help you today with your modular building needs?";
        setMessages([
          {
            id: simpleUUID(),
            role: MessageRole.MODEL,
            content: await marked.parse(welcomeMessage),
          },
        ]);
      } catch (error) {
        console.error('Error initializing chat:', error);
        const errorMessage = "Sorry, I'm having trouble connecting. Please check your API key configuration.";
        setMessages([
          {
            id: simpleUUID(),
            role: MessageRole.MODEL,
            content: await marked.parse(errorMessage),
          },
        ]);
      }
    };
    initChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessageContent = input;
    const userMessage: Message = {
      id: simpleUUID(),
      role: MessageRole.USER,
      content: await marked.parse(userMessageContent.replace(/\n/g, '<br/>')),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    setIsLoading(true);

    try {
      const stream = await chat.sendMessageStream({ message: userMessageContent });
      let text = '';
      let modelMessageId: string = '';
      
      for await (const chunk of stream) {
        if (isLoading) {
            setIsLoading(false); 
        }
        const c = chunk as GenerateContentResponse;
        text += c.text;
        const htmlContent = await marked.parse(text);

        if (!modelMessageId) {
            modelMessageId = simpleUUID();
            setMessages((prev) => [
            ...prev,
            { id: modelMessageId, role: MessageRole.MODEL, content: htmlContent },
            ]);
        } else {
            setMessages((prev) =>
            prev.map((msg) =>
                msg.id === modelMessageId ? { ...msg, content: htmlContent } : msg
            )
            );
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = 'Sorry, I encountered an error. Please try again.';
      const htmlContent = await marked.parse(errorMessage);
      setMessages((prev) => [
        ...prev,
        { id: simpleUUID(), role: MessageRole.MODEL, content: htmlContent },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className={styles.chatInterface}>
      <div className={styles.chatInterface__container}>
        <header className={styles.chatInterface__header}>
          <div className={styles.chatInterface__headerContent}>
            <h1 className={styles.chatInterface__title}>EcoModular Assistant</h1>
            <p className={styles.chatInterface__status}>
              <span className={styles.chatInterface__statusDot}>
                <span className={styles.chatInterface__statusPing}></span>
                <span className={styles.chatInterface__statusIndicator}></span>
              </span>
              Online
            </p>
          </div>
          <button 
            onClick={onClose} 
            className={styles.chatInterface__closeButton}
            aria-label="Close chat"
          >
            <CloseIcon className={styles.chatInterface__closeIcon} />
          </button>
        </header>
        
        <div className={styles.chatInterface__messages}>
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLoading && (
            <div className={styles.chatInterface__loading}>
              <div className={styles.chatInterface__loadingIcon}>
                <BotIcon className={styles.chatInterface__loadingIconSvg} />
              </div>
              <div className={styles.chatInterface__loadingBubble}>
                <div className={styles.chatInterface__loadingDots}>
                  <div className={styles.chatInterface__loadingDot}></div>
                  <div className={styles.chatInterface__loadingDot}></div>
                  <div className={styles.chatInterface__loadingDot}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <footer className={styles.chatInterface__footer}>
          <form onSubmit={handleSendMessage} className={styles.chatInterface__form}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e as any);
                }
              }}
              placeholder="Ask a question..."
              className={styles.chatInterface__textarea}
              rows={1}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={styles.chatInterface__sendButton}
              aria-label="Send message"
            >
              <SendIcon className={styles.chatInterface__sendIcon} />
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default ChatInterface;

