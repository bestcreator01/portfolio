"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Linkedin, Github, Instagram } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2 },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-6 bg-[#f5f5f5]/80 backdrop-blur-sm z-50"
      >
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft size={16} />
            Back
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/shin-gloria/"
            target="_blank"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="https://github.com/bestcreator01"
            target="_blank"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github size={16} />
          </Link>
          <Link
            href="https://www.instagram.com/lilymlenn/"
            target="_blank"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram size={16} />
          </Link>
        </div>
      </motion.header>

      {/* About Content */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="max-w-4xl mx-auto px-8 pt-32 pb-20"
      >
        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-semibold mb-12 text-center">
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div variants={fadeIn} className="relative aspect-square flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image src="/images/gloriashin.png" alt="Gloria Shin" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hi, I'm Gloria Shin</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              A recent Computer Science graduate at the University of Utah, with a deep passion for computer graphics
              and interactive software.
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            My journey into tech actually began in a 3D-modeling class, where I became fascinated by how digital shapes,
            lighting, and materials were constructed behind the scenes. That curiosity pushed me to take an introductory
            programming course, and I quickly realized how much I loved the logic, creativity, and problem-solving in
            code; ultimately leading me to pursue graphics programming more seriously.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Alongside my graphics work, I've also built strong full-stack engineering skills through almost 2 years of
            real-world experience as a Software Engineer Intern at the University of Utah, developing multiple
            production features, architecting APIs, tested systems end-to-end, and collaborated in agile teams while
            working across multiple programming languages and frameworks.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I thrive in environments where I can learn quickly, dive deep into new technologies, and build things that
            feel visually compelling and meaningful. Whether I'm writing shaders, designing rendering pipelines, or
            creating user-focused full-stack applications, I genuinely enjoy the craft of coding and the creativity that
            comes with bringing ideas to life.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-12 text-center">
          <Link href="/">
            <Button
              variant="default"
              className="bg-black text-white rounded-full px-6 hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}
