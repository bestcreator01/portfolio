"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { use } from "react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// Project data
const projectsData: Record<string, any> = {
  "1": {
    title: "WakeUpWars",
    subtitle: "Social Alarm App with Game Challenges",
    description:
      "Designed and developed an Android social alarm app using React Native, Expo, Django, and AWS RDS, enabling users to complete game-based challenges as they disable alarms.",
    tech: ["React Native", "Expo", "Django", "AWS RDS", "REST APIs"],
    features: [
      "Real-time multiplayer support",
      "Group challenges and reward distribution",
      "Secure authentication",
      "Challenge lifecycle management",
    ],
    timeline: "January 2025 – December 2025",
  },
  "2": {
    title: "Real-Time Volumetric Smoke Simulation",
    subtitle: "Particle-based Smoke Rendering System",
    description:
      "Designed and implemented a real-time particle-based smoke rendering system in C++ and OpenGL, simulating volumetric smoke emerging from a teapot and ground emitters using instanced cube geometry.",
    tech: ["C++", "OpenGL", "GLSL Shaders", "Computer Graphics"],
    features: [
      "Procedural motion and turbulence",
      "Henyey-Greenstein phase functions",
      "Directional light scattering",
      "Soft shadows and rim lighting",
    ],
    timeline: "Spring 2025",
  },
  "3": {
    title: "Asia Travel Guide",
    subtitle: "Interactive Educational App",
    description:
      "Built an interactive educational app using C++ and Qt, integrating real-time coordinate tracking, user quiz engagement, and JSON-based content persistence across sessions.",
    tech: ["C++", "Qt Framework", "Box2D", "JSON"],
    features: [
      "Real-time coordinate tracking",
      "Interactive quizzes",
      "Dynamic animations with Box2D",
      "Session persistence",
    ],
    timeline: "Fall 2023",
  },
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = projectsData[id] || projectsData["1"]

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
            Back to Projects
          </Button>
        </Link>
      </motion.header>

      {/* Project Content */}
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
        className="max-w-5xl mx-auto px-8 pt-32 pb-20"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
          <p className="text-sm text-gray-500">{project.timeline}</p>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div variants={fadeIn} className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-gray-200">
          <Image
            src={`/.jpg?height=600&width=1200&query=${project.title}+project+screenshot`}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeIn} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={fadeIn} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={fadeIn} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Media Placeholders */}
        <motion.div variants={fadeIn} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Screenshots & Media</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={`/.jpg?height=400&width=600&query=${project.title}+screenshot+${num}`}
                  alt={`${project.title} screenshot ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Links Placeholder */}
        <motion.div variants={fadeIn} className="flex gap-4">
          <Button variant="default" className="bg-black text-white rounded-full gap-2">
            <Github size={16} />
            View on GitHub
          </Button>
          <Button variant="outline" className="rounded-full gap-2 bg-transparent">
            <ExternalLink size={16} />
            Live Demo
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
