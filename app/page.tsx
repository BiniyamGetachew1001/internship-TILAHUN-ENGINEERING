"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Cog, Hammer, Ruler, Award, Users, Clock, CheckCircle, ChevronRight } from "lucide-react"
import ServiceCard from "@/components/service-card"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import CounterAnimation from "@/components/counter-animation"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const services = [
    {
      title: "Metal Fabrication",
      description:
        "Custom metal fabrication services for industrial and commercial applications with precision engineering.",
      icon: <Hammer className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Welding Services",
      description:
        "Expert welding for structural steel, stainless steel, aluminum, and other metals with quality assurance.",
      icon: <Wrench className="h-10 w-10" />,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Mechanical Design",
      description:
        "Innovative mechanical design solutions for complex engineering challenges and industrial applications.",
      icon: <Cog className="h-10 w-10" />,
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Structural Engineering",
      description: "Comprehensive structural engineering services for buildings, bridges, and industrial structures.",
      icon: <Ruler className="h-10 w-10" />,
      color: "from-purple-500 to-indigo-600",
    },
  ]

  const projects = [
    {
      title: "Industrial Manufacturing Plant",
      category: "Industrial",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete metal fabrication and installation for a major manufacturing facility in Addis Ababa.",
    },
    {
      title: "Custom Steel Bridge",
      category: "Infrastructure",
      image: "/placeholder.svg?height=600&width=800",
      description: "Design and construction of a custom steel bridge connecting two industrial complexes.",
    },
    {
      title: "Precision Machinery Components",
      category: "Custom Work",
      image: "/placeholder.svg?height=600&width=800",
      description: "Fabrication of high-precision components for specialized industrial machinery.",
    },
  ]

  const testimonials = [
    {
      name: "Abebe Kebede",
      position: "CEO, Ethiopian Construction Corp",
      content:
        "Tilahun Engineering delivered exceptional quality on our manufacturing plant project. Their attention to detail and commitment to deadlines exceeded our expectations.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sara Mekonnen",
      position: "Project Manager, Addis Development",
      content:
        "Working with Tilahun Engineering has been a seamless experience. Their team's expertise in metal fabrication and structural engineering is unmatched in the industry.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Daniel Tesfaye",
      position: "Director, National Infrastructure Agency",
      content:
        "The bridge project completed by Tilahun Engineering stands as a testament to their engineering excellence and innovative approach to complex challenges.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Industrial engineering facility"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Floating elements for depth */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "15%" }}
        />

        <motion.div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ bottom: "25%", right: "10%" }}
        />

        <div className="container relative z-10 mt-20 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto md:mx-0"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight md:leading-tight lg:leading-tight mb-6">
              Engineering the
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Future </span>
              in Steel
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl">
              Tilahun Engineering PLC delivers premium metalwork and mechanical engineering solutions with precision,
              innovation, and excellence for industries across Ethiopia and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.65)] transition-all duration-300"
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
          >
            <ChevronRight className="h-10 w-10 text-cyan-400 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="w-full py-16 md:py-24 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <Award className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={15} duration={2} />+
              </h3>
              <p className="text-zinc-400">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <Users className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={120} duration={2} />+
              </h3>
              <p className="text-zinc-400">Team Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <CheckCircle className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={500} duration={2} />+
              </h3>
              <p className="text-zinc-400">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <Clock className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={98} duration={2} />%
              </h3>
              <p className="text-zinc-400">On-time Delivery</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_50%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Premium Engineering
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-zinc-400 text-lg">
              We deliver exceptional metalwork and mechanical engineering solutions with precision, innovation, and
              excellence for industries across Ethiopia and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <Button
              asChild
              className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="w-full py-20 md:py-32 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          >
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Featured
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  {" "}
                  Projects
                </span>
              </h2>
              <p className="text-zinc-400 text-lg">
                Explore our portfolio of successful engineering projects delivered with precision and excellence.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  description={project.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Clients Say
              </span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Hear from our satisfied clients about their experience working with Tilahun Engineering PLC.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  position={testimonial.position}
                  content={testimonial.content}
                  image={testimonial.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="w-full py-20 md:py-32 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border-t border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.15),transparent_50%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Engineering Project?
              </span>
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and discover how Tilahun Engineering can deliver
              exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.65)] transition-all duration-300"
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
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
