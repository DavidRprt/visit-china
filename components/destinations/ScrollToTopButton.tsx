import { useEffect, useState } from "react"
import { ArrowUpIcon } from "@heroicons/react/24/solid" 


const ScrollToTopButton = ({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (targetRef.current && targetRef.current.scrollTop > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    if (targetRef.current) {
      const offset = -220
      targetRef.current.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const currentRef = targetRef.current
    if (currentRef) {
      currentRef.addEventListener("scroll", toggleVisibility)
      return () => {
        currentRef.removeEventListener("scroll", toggleVisibility)
      }
    }
  }, [targetRef])

  return (
    <div className="fixed bottom-5 right-5 md:hidden">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white text-slate-700 shadow-lg hover:bg-slate-100 transition duration-300 flex items-center justify-center"
          style={{ width: "50px", height: "50px" }} 
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
