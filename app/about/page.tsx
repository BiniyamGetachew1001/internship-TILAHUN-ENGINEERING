"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Lightbulb,
  Target,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  const historyInView = useInView(historyRef, { once: true, amount: 0.3 })
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 })
  const certificationsInView = useInView(certificationsRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })

  const timelineEvents = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Tilahun Engineering was established in Addis Ababa with a small team of 5 engineers.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      year: "2012",
      title: "First Major Project",
      description:
        "Completed our first major industrial manufacturing facility project for a multinational corporation.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Expanded operations with a new facility and increased our team to over 50 skilled professionals.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      year: "2018",
      title: "International Recognition",
      description: "Received international certification and began working on projects across East Africa.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      year: "2021",
      title: "Innovation Center",
      description: "Opened our state-of-the-art innovation center focused on sustainable engineering solutions.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Recognized as the leading metalwork and mechanical engineering company in Ethiopia.",
      icon: <Target className="h-6 w-6" />,
    },
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health and Safety",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "AWS D1.1",
      description: "Structural Welding Certification",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const teamMembers = [
    {
      name: "Abebe Tilahun",
      position: "Founder & CEO",
      bio: "With over 25 years of experience in mechanical engineering, Abebe founded Tilahun Engineering with a vision to transform the industry in Ethiopia.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sara Haile",
      position: "Chief Operations Officer",
      bio: "Sara oversees all operational aspects of the company, ensuring projects are delivered with precision and excellence.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Daniel Bekele",
      position: "Head of Engineering",
      bio: "Daniel leads our team of engineers, bringing innovative solutions to complex engineering challenges.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Meron Tadesse",
      position: "Quality Assurance Director",
      bio: "Meron ensures all projects meet the highest standards of quality and safety through rigorous testing and inspection.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering the highest quality workmanship and service.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously seek new technologies and methods to improve our solutions.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Integrity",
      description: "We conduct our business with the highest level of integrity, transparency, and ethical standards.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Timeliness",
      description: "We respect deadlines and deliver projects on time, every time, without compromising on quality.",
      icon: <Clock className="h-6 w-6" />,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  {" "}
                  Tilahun{" "}
                </span>
                Engineering
              </h1>
              <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
                For over 15 years, Tilahun Engineering has been at the forefront of metalwork and mechanical engineering
                in Ethiopia, delivering innovative solutions with precision and excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
                >
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
                >
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative overflow-hidden rounded-lg border border-zinc-800">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tilahun Engineering Facility"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className="w-full py-20 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  {" "}
                  History
                </span>
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Founded in 2008 by Abebe Tilahun, a visionary mechanical engineer with a passion for excellence,
                  Tilahun Engineering began as a small workshop in Addis Ababa with just five dedicated professionals.
                </p>
                <p>
                  Over the years, we have grown into one of Ethiopia's premier engineering firms, with a
                  state-of-the-art facility spanning over 15,000 square meters and a team of more than 120 skilled
                  engineers, technicians, and support staff.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep
                  understanding of the evolving needs of industries across Ethiopia and beyond. From our first major
                  project in 2012 to our current position as an industry leader, we have maintained our founding
                  principles while embracing cutting-edge technologies and methodologies.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-50 -rotate-1"></div>
                <div className="relative overflow-hidden rounded-lg border border-zinc-800 rotate-1">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Tilahun Engineering History"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section ref={missionRef} className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission &
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Values</span>
            </h2>
            <p className="text-lg text-zinc-300">
              At Tilahun Engineering, we are driven by a clear mission and guided by core values that shape everything
              we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_70%)]"></div>

              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-zinc-300 mb-6">
                To deliver exceptional metalwork and mechanical engineering solutions that empower industries, transform
                infrastructure, and contribute to Ethiopia's economic growth through innovation, precision, and
                unwavering commitment to excellence.
              </p>
              <div className="flex items-center gap-4 text-zinc-300">
                <Target className="h-10 w-10 text-cyan-400" />
                <p className="italic">"Engineering the future in steel, one precision project at a time."</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={missionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-md bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400">
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white">{value.title}</h4>
                    </div>
                    <p className="text-zinc-400">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="w-full py-20 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our Company
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Timeline
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Explore the key milestones in our journey from a small workshop to Ethiopia's leading engineering firm.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-cyan-500"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                    index % 2 === 0 ? "md:text-right" : "md:text-left md:flex-row-reverse",
                  )}
                >
                  <div
                    className={cn("md:col-span-1", index % 2 === 0 ? "md:text-right order-1" : "order-1 md:order-2")}
                  >
                    <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-zinc-400">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                      {event.icon}
                    </div>
                  </div>

                  <div
                    className={cn("md:col-span-1", index % 2 === 0 ? "order-2" : "order-2 md:order-1 md:text-right")}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className={cn("h-5 w-5 text-cyan-400", index % 2 === 0 ? "md:order-2" : "order-1")} />
                      <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                        {event.year}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certificationsRef} className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Certifications
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              We maintain the highest standards of quality, safety, and environmental responsibility through
              internationally recognized certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
                <div className="relative mb-4 p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-zinc-400">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="w-full py-20 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our Leadership
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Team</span>
            </h2>
            <p className="text-lg text-zinc-300">
              Meet the experienced professionals who lead Tilahun Engineering with vision, expertise, and dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-center px-4">{member.bio}</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-400">{member.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-zinc-300 mb-6">
              Our leadership team is supported by over 120 dedicated professionals, including engineers, technicians,
              project managers, and administrative staff.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
            >
              <Link href="/careers">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent_70%)]" />

        <div className="container relative">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_70%)]"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Work with Ethiopia's Leading Engineering Firm?
                </h2>
                <p className="text-zinc-300 mb-6">
                  Contact us today to discuss your project requirements and discover how Tilahun Engineering can deliver
                  exceptional results for your business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
                  >
                    <Link href="/contact">
                      Contact Us Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-50 rotate-1"></div>
                <div className="relative overflow-hidden rounded-lg border border-zinc-800 -rotate-1">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tilahun Engineering Project"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
