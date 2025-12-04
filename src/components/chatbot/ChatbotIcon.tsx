import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import styles from './scss/_chatbot.module.scss'
import ChatInterface from './ChatInterface.tsx'

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [iconSize, setIconSize] = useState(24)
  const [strokeWidth, setStrokeWidth] = useState(2.5)
  const [isMobileFullscreen, setIsMobileFullscreen] = useState(false)

  useEffect(() => {
    const updateIconSize = () => {
      const width = window.innerWidth
      const isSmallMobile = width <= 767
      setIsMobileFullscreen(isSmallMobile)

      if (isSmallMobile) {
        // Small phones
        setIconSize(18)
        setStrokeWidth(2)
      } else if (width <= 767) {
        // Large phones
        setIconSize(20)
        setStrokeWidth(2.25)
      } else if (width <= 1023) {
        // Tablets
        setIconSize(22)
        setStrokeWidth(2.5)
      } else {
        // Desktops and larger
        setIconSize(24)
        setStrokeWidth(2.5)
      }
    }

    updateIconSize()
    window.addEventListener('resize', updateIconSize)

    return () => window.removeEventListener('resize', updateIconSize)
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Hide chatbot button on small mobile screens when chat is open (fullscreen mode) */}
      {!(isOpen && isMobileFullscreen) && (
        <button
          className={styles.chatbot}
          onClick={handleClick}
          aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        >
          {isOpen ? (
            <X className={styles.chatbot__icon} size={iconSize} strokeWidth={strokeWidth} />
          ) : (
            <MessageCircle className={styles.chatbot__icon} size={iconSize} strokeWidth={strokeWidth} />
          )}
        </button>
      )}
      {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default ChatbotIcon

