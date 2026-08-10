"use client"

import { Mail, FileText, Linkedin, Instagram, ArrowRight, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import LogoCarousel from "./components/logo-carousel"
import Image from "next/image"
import { useState } from "react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const projects = [
  {
    id: 1,
    title: "WakeUpWars",
    desc: "Social alarm app with game challenges",
    image: "/mobile-app-alarm-challenge.jpg",
  },
  {
    id: 2,
    title: "Volumetric Smoke Simulation",
    desc: "Real-time particle-based rendering",
    image: "/smoke-simulation-3d-graphics.jpg",
  },
  { id: 3, title: "Asia Travel Guide", desc: "Interactive educational app", image: "/travel-guide-app.png" },
  {
    id: 4,
    title: "Computer Graphics Project",
    desc: "Advanced rendering techniques",
    image: "/computer-graphics-rendering.jpg",
  },
  {
    id: 5,
    title: "Machine Learning Model",
    desc: "Data analysis and prediction",
    image: "/machine-learning-visualization.png",
  },
  { id: 6, title: "Web Dashboard", desc: "Full-stack analytics platform", image: "/web-dashboard-analytics.png" },
  { id: 7, title: "3D Modeling Tool", desc: "Interactive 3D scene editor", image: "/3d-modeling-software.jpg" },
  { id: 8, title: "Mobile Game", desc: "Physics-based puzzle game", image: "/mobile-puzzle-game.jpg" },
]

export default function Home() {
  const [projectPage, setProjectPage] = useState(0)
  const projectsPerPage = 4
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(projectPage * projectsPerPage, (projectPage + 1) * projectsPerPage)

  const copyEmail = () => {
    navigator.clipboard.writeText("glorystar0529@gmail.com")
    alert("Email copied to clipboard!")
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-6 bg-[#f5f5f5]/80 backdrop-blur-sm z-50"
      >
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 flex items-center gap-1">
            <Mail size={16} />
            <span>glorystar0529@gmail.com</span>
          </span>
          <button
            onClick={copyEmail}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <FileText size={16} />
            <span>Copy</span>
          </button>
        </div>
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

      {/* Hero Section */}
      <motion.section initial="initial" animate="animate" variants={stagger} className="text-center px-4 pt-32 pb-20">
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-5xl font-semibold max-w-2xl mx-auto leading-tight mb-8 whitespace-pre-line"
        >
          {"Full Stack Software Engineer\nGloria Shin"}
        </motion.h1>
        <motion.div variants={fadeIn}>
          <Link href="/about">
            <Button
              variant="default"
              className="bg-black text-white rounded-full px-6 hover:bg-gray-800 transition-colors group"
            >
              About me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto py-16 px-8"
      >
        <LogoCarousel />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto py-20 px-8"
      >
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Work Experience</h2>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative border-l-2 border-gray-300 pl-8 ml-4"
        >
          <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-0"></div>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
            </div>
            <p className="text-gray-600 mb-2">University of Utah, University Support Services</p>
            <p className="text-sm text-gray-500 mb-4">March 2024 – Present</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Developed and implemented both front-end and back-end of the Upload-History page and Reports page for the Repay App, utilizing Angular 17 and Spring Boot 3, significantly reducing UI response times by 40% through optimized caching with Angular Query.
              </li>
              <li>Integrated role-based authorization on routes with RxJS and SSO-login-based authentication using Spring Security, ensuring access and compliance with enterprise security standards.</li>
              <li>
                Configured and tested the application locally, successfully deployed it to development and test environments, and managed API integrations using the WSO2 gateway.
              </li>
              <li>Designed and implemented delinquency notifications for the Repay Notification service, collaborated with cross-functional teams to validate borrower data, and enhanced data integrity using Spring Data JPA.</li>
              <li>Conducted comprehensive unit testing with JUnit achieving 90% code coverage, ensuring application reliability and functionality, and reducing post-deployment bugs.</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-8"
      >
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">My technical projects</h2>
          <p className="text-xl text-gray-600">from web & mobile app to computer graphics projects</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
              className="rounded-xl overflow-hidden hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="aspect-[4/3] relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            className="rounded-full bg-transparent"
            onClick={() => setProjectPage(Math.max(0, projectPage - 1))}
            disabled={projectPage === 0}
          >
            <ChevronLeft size={20} />
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProjectPage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === projectPage ? "bg-black w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            className="rounded-full bg-transparent"
            onClick={() => setProjectPage(Math.min(totalPages - 1, projectPage + 1))}
            disabled={projectPage === totalPages - 1}
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-20"
      >
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
        >
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <FileText size={48} className="text-gray-600" />
          </motion.div>
        </motion.div>
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          Learn more about me
        </motion.h2>
        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Link href="/resume" target="_blank">
            <Button
              variant="default"
              className="bg-black text-white rounded-full px-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
            >
              View resume
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-between items-center px-8 py-6 border-t border-gray-200"
      >
        <p className="text-sm text-gray-600">© 2025 Gloria Shin. All rights reserved.</p>
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
      </motion.footer>
    </div>
  )
}
