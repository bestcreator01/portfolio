"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function ResumePage() {
  const handleDownloadPDF = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/Gloria-Shin_Resume.pdf" // This will need to be the actual PDF file path
    link.download = "Gloria-Shin_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
        <Button variant="default" className="bg-black text-white rounded-full gap-2" onClick={handleDownloadPDF}>
          <Download size={16} />
          Download PDF
        </Button>
      </motion.header>

      {/* Resume Content */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="max-w-4xl mx-auto px-8 pt-32 pb-20"
      >
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Gloria Shin</h1>
            <p className="text-gray-600 mb-4">Full Stack Software Engineer</p>
            <div className="flex justify-center gap-4 text-sm text-gray-600">
              <span>Salt Lake City, UT</span>
              <span>•</span>
              <span>(385) 436-8341</span>
              <span>•</span>
              <span>glorystar0529@gmail.com</span>
            </div>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">BS in Computer Science</h3>
                  <span className="text-gray-600 text-sm">January 2022 – December 2025</span>
                </div>
                <p className="text-gray-700">University of Utah</p>
                <p className="text-gray-600 mb-2">GPA: 3.74/4.0</p>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Scholarships:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Goldman Sachs Computing, AW Spehar Family, Wilford & Dana Druk, Worsencroft & McEvoy, Robert
                    Henricks, SLC Make A Difference, UAC Academic Excellence, UAC Experiential Writing Center, UAC
                    Pioneers, and UAC Opportunity
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Programming Coursework:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Computer Vision, Computer Graphics, Machine Learning, Data Mining, Computer Systems, Algorithms &
                    Data Structure, Kinetic Arts & Embedded Systems, Software Practice (C#, C++), Computer Organization,
                    Foundation of Data Analysis
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Technical Skills</h2>
              <div className="grid gap-3">
                <div>
                  <span className="font-semibold">Programming Languages: </span>
                  <span className="text-gray-700">C#, C/C++, Java, Python, JavaScript, TypeScript, SQL</span>
                </div>
                <div>
                  <span className="font-semibold">Frameworks & Libraries: </span>
                  <span className="text-gray-700">
                    Angular, React Native, Node.js, Expo, Spring Framework, Spring Boot, Django, PyTorch, OpenGL (GLSL),
                    REST APIs
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Web & DevOps: </span>
                  <span className="text-gray-700">
                    Docker, Snyk, Jenkins, Gradle, WSO2 API Gateway, GitHub, GitLab CI/CD, AWS (RDS), Linux, HTML5, CSS3
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Software & Tools: </span>
                  <span className="text-gray-700">
                    Ubuntu, Jira, Visual Studio, VS Code, IntelliJ, Eclipse, Qt, Autodesk Maya, Windsurf
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Version Control: </span>
                  <span className="text-gray-700">Git</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Relevant Experience</h2>
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Software Engineer Intern</h3>
                  <span className="text-gray-600 text-sm">March 2024 – Present</span>
                </div>
                <p className="text-gray-700 mb-3">University of Utah, University Support Services</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>
                    Developed and implemented both front-end and back-end of the Upload-History page and Reports page
                    for the Repay App, utilizing Angular 17 and Spring Boot 3, significantly reducing UI response times
                    by 40% through optimized caching with Angular Query
                  </li>
                  <li>
                    Integrated role-based authorization on routes with RxJS and SSO-login-based authentication using
                    Spring Security, ensuring access and compliance with enterprise security standards
                  </li>
                  <li>
                    Configured and tested the application locally, successfully deployed it to development and test
                    environments, and managed API integrations using the WSO2 gateway
                  </li>
                  <li>
                    Designed and implemented delinquency notifications for the Repay Notification service, collaborated
                    with cross-functional teams to validate borrower data, and enhanced data integrity using Spring Data
                    JPA
                  </li>
                  <li>
                    Conducted comprehensive unit testing with JUnit achieving 90% code coverage, ensuring application
                    reliability and functionality, and reducing post-deployment bugs
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Technical Projects</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">WakeUpWars</h3>
                    <span className="text-gray-600 text-sm">January 2025 – December 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>
                      Designed and developed an Android social alarm app using React Native, Expo, Django, and AWS RDS,
                      enabling users to complete game-based challenges as they disable alarms
                    </li>
                    <li>
                      Engineered robust client-server architecture enabling real-time multiplayer support, group
                      challenges, and reward distribution; ensuring secure authentication and RESTful API design
                    </li>
                    <li>
                      Engineered challenge lifecycle including join windows, timers, scoring, and reward settlement
                      across personal, singleplayer, and multiplayer/group challenges
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">Real-Time Volumetric Smoke Simulation</h3>
                    <span className="text-gray-600 text-sm">Spring 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>
                      Designed and implemented a real-time particle-based smoke rendering system in C++ and OpenGL,
                      simulating volumetric smoke emerging from a teapot and ground emitters using instanced cube
                      geometry
                    </li>
                    <li>
                      Developed procedural motion, turbulence, and fading behavior using randomized particle attributes,
                      grid/circular emitter logic, and custom GLSL shaders
                    </li>
                    <li>
                      Implemented physically-based lighting models including Henyey-Greenstein and Schlick phase
                      functions to simulate directional light scattering, rim lighting, and soft shadows
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">Asia Travel Guide</h3>
                    <span className="text-gray-600 text-sm">Fall 2023</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>
                      Built an interactive educational app using C++ and Qt, integrating real-time coordinate tracking,
                      user quiz engagement, and JSON-based content persistence across sessions
                    </li>
                    <li>
                      Implemented dynamic animations and user feedback using the Box2D physics engine, enhancing user
                      retention through interactive design and responsive UI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
