"use client"
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

interface ContentItem {
  title: string
  description: string
  content?: React.ReactNode
  titleColor?: string
  textColor?: string
  showButton?: boolean
}

interface StickyScrollProps {
  content: ContentItem[]
  contentClassName?: string
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    "var(--secondary-light)",
    "var(--red-700)",
    "var(--secondary-dark)",
  ]

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-6">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-2xl font-bold ${item.titleColor} `}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-lg ${item.textColor} max-w-sm mt-10`}
              >
                {item.description}
              </motion.p>
              {item.showButton && (
                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-6 px-6 py-2 bg-transparent border dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                >
                  Learn More
                </motion.button>
              )}
            </div>
          ))}
          <div className="md:h-40" /> {/* Spacer to add extra padding */}
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-80 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}
