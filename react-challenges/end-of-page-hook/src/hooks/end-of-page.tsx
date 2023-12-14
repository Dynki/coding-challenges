import { useEffect, useRef, useState } from "react"

export const useEndOfPage = () => {
  const ref = useRef(null)
  const [atEndOfPage, setAtEndOfPage] = useState<boolean>(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAtEndOfPage(true)
        } else {
          setAtEndOfPage(false)
        }
      })
    })
  
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return {
    ref, atEndOfPage
  }
}