import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import styles from './scss/_chatbot.module.scss'
import ChatInterface from './ChatInterface.tsx'

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button 
        className={styles.chatbot}
        onClick={handleClick}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? (
          <X className={styles.chatbot__icon} />
        ) : (
          <MessageCircle className={styles.chatbot__icon} />
        )}
      </button>
      {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default ChatbotIcon

