import { useState, useEffect, useRef } from 'react'

export const useNavScroll = (activateAt: number = 10, deactivateAt: number = 5) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const scrollTimeoutRef = useRef<number | null>(null)
    const lastStateRef = useRef(false)

    useEffect(() => {
        const handleScroll = () => {
            // Clear any pending timeout
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current)
            }

            // Use a small debounce to batch rapid scroll events
            scrollTimeoutRef.current = setTimeout(() => {
                const currentScroll = window.scrollY || window.pageYOffset
                const currentState = lastStateRef.current

                let newState = currentState

                // Only change state if we've crossed a threshold
                if (!currentState && currentScroll > activateAt) {
                    newState = true
                } else if (currentState && currentScroll < deactivateAt) {
                    newState = false
                }

                // Only update if state actually changed
                if (newState !== currentState) {
                    lastStateRef.current = newState
                    setIsScrolled(newState)
                }
            }, 16) // ~60fps debounce
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Check initial state

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current)
            }
        }
    }, [activateAt, deactivateAt])

    return isScrolled
}