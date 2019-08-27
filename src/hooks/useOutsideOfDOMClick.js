import { useRef, useEffect } from 'react'

export default function useOutsideOfDOMClick(callback) {
    const domRef = useRef(null)
    useEffect(() => {
        function eventListener(e) {
            if (domRef.current.contains(e.target)) {
                return
            }

            if (!document.contains(e.target) && !domRef.current.contains(e.target)) {
                return
            }

            callback()
        }
        document.addEventListener('click', eventListener)

        return () => document.removeEventListener('click', eventListener)
    }, [callback])

    return domRef
}