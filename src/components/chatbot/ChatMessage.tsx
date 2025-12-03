import React from 'react';
import type { Message } from '../../types/chat';
import { MessageRole } from '../../types/chat';
import { BotIcon, UserIcon } from './IconComponents';
import styles from './scss/_chatbot.module.scss';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === MessageRole.USER;
  const isSystem = message.role === MessageRole.SYSTEM;

  return (
    <div className={`${styles.chatMessage} ${isUser ? styles['chatMessage--user'] : ''}`}>
      <div className={`${styles.chatMessage__icon} ${isUser ? styles['chatMessage__icon--user'] : ''} ${isSystem ? styles['chatMessage__icon--system'] : ''}`}>
        {isUser ? (
          <UserIcon className={styles.chatMessage__iconSvg} />
        ) : (
          <BotIcon className={styles.chatMessage__iconSvg} />
        )}
      </div>
      <div className={`${styles.chatMessage__bubble} ${isUser ? styles['chatMessage__bubble--user'] : ''} ${isSystem ? styles['chatMessage__bubble--system'] : ''}`}>
        <div 
          className={styles.chatMessage__content}
          dangerouslySetInnerHTML={{ __html: message.content }} 
        />
      </div>
    </div>
  );
};

export default ChatMessage;

