"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { src: "/images/java.png", name: "Java", alt: "Java" },
  { src: "/images/angular.png", name: "Angular", alt: "Angular" },
  { src: "/images/js.png", name: "JavaScript", alt: "JavaScript" },
  { src: "/images/python.png", name: "Python", alt: "Python" },
  { src: "/images/ts.png", name: "TypeScript", alt: "TypeScript" },
  { src: "/images/git.png", name: "Git", alt: "Git" },
  { src: "/images/csharp.png", name: "C#", alt: "C#" },
  { src: "/images/sql.png", name: "SQL", alt: "SQL" },
  { src: "/images/reactnative.png", name: "React", alt: "React" },
  { src: "/images/image.png", name: "C++", alt: "C++" },
]

export default function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="overflow-hidden py-12">
      <motion.div className="flex" animate={{ x: `-${currentIndex * (100 / 6)}%` }} transition={{ duration: 0.5 }}>
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-1/6 px-4 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={48}
              height={48}
              className="object-contain transition-opacity duration-300 hover:opacity-80"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
