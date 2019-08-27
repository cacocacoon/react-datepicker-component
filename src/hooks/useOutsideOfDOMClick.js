import { useRef, useEffect } from 'react'

export default function useOutsideOfDOMClick(callback) {
    const domRef = useRef(null)
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (domRef.current.contains(e.target)) {
                return
            }

            callback()
        })
    }, [callback])

    return domRef
}