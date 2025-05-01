"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Cog,
  Hammer,
  Ruler,
  Shield,
  Wrench,
  Zap,
  Settings,
  PenToolIcon as Tool,
  Truck,
  FileText,
  Clock,
  Award,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import CounterAnimation from "@/components/counter-animation"

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const overviewRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const overviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const processInView = useInView(processRef, { once: true, amount: 0.3 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleExpand = (serviceId: string) => {
    if (expandedService === serviceId) {
      setExpandedService(null)
    } else {
      setExpandedService(serviceId)
    }
  }

  const services = [
    {
      id: "metal-fabrication",
      title: "Metal Fabrication",
      shortDescription: "Custom metal fabrication services for industrial and commercial applications.",
      fullDescription:
        "Our metal fabrication services combine precision engineering with state-of-the-art technology to create custom metal components and structures for various industrial and commercial applications. We work with a wide range of metals including steel, aluminum, stainless steel, and specialized alloys.",
      icon: <Hammer className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-600",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Custom metal component design and fabrication",
        "Precision cutting, bending, and forming",
        "CNC machining and laser cutting",
        "Sheet metal fabrication",
        "Metal assembly and finishing",
      ],
      benefits: [
        "Precision-engineered components",
        "Customized solutions for specific needs",
        "High-quality materials and workmanship",
        "Efficient production processes",
        "Durable and reliable results",
      ],
    },
    {
      id: "welding-services",
      title: "Welding Services",
      shortDescription: "Expert welding for structural steel, stainless steel, aluminum, and other metals.",
      fullDescription:
        "Our team of certified welders delivers expert welding services for a variety of metals and applications. We utilize advanced welding techniques and equipment to ensure strong, durable connections that meet or exceed industry standards. From structural steel to specialized alloys, we have the expertise to handle your welding needs.",
      icon: <Wrench className="h-10 w-10" />,
      color: "from-orange-500 to-red-600",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "MIG, TIG, and stick welding",
        "Structural steel welding",
        "Aluminum and stainless steel welding",
        "Pipe and pressure vessel welding",
        "On-site welding services",
      ],
      benefits: [
        "Certified welders with extensive experience",
        "Strict quality control procedures",
        "Compliance with industry standards",
        "Strong, durable welds",
        "Versatility across different metals and applications",
      ],
    },
    {
      id: "mechanical-design",
      title: "Mechanical Design",
      shortDescription: "Innovative mechanical design solutions for complex engineering challenges.",
      fullDescription:
        "Our mechanical design services provide innovative solutions for complex engineering challenges across various industries. Our team of experienced engineers utilizes advanced CAD software and simulation tools to design mechanical systems, components, and products that optimize performance, efficiency, and reliability.",
      icon: <Cog className="h-10 w-10" />,
      color: "from-emerald-500 to-green-600",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "3D CAD modeling and design",
        "Mechanical system design",
        "Product development and prototyping",
        "Finite Element Analysis (FEA)",
        "Design optimization and validation",
      ],
      benefits: [
        "Innovative design solutions",
        "Performance optimization",
        "Cost-effective engineering",
        "Reduced time-to-market",
        "Improved product reliability",
      ],
    },
    {
      id: "structural-engineering",
      title: "Structural Engineering",
      shortDescription: "Comprehensive structural engineering services for buildings and industrial structures.",
      fullDescription:
        "Our structural engineering services provide comprehensive solutions for buildings, bridges, and industrial structures. We combine technical expertise with innovative approaches to design safe, efficient, and cost-effective structural systems that meet project requirements and comply with relevant codes and standards.",
      icon: <Ruler className="h-10 w-10" />,
      color: "from-purple-500 to-indigo-600",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Structural analysis and design",
        "Steel structure design",
        "Reinforced concrete design",
        "Foundation design",
        "Structural inspections and assessments",
      ],
      benefits: [
        "Safe and code-compliant structures",
        "Optimized material usage",
        "Cost-effective design solutions",
        "Innovative structural systems",
        "Comprehensive documentation",
      ],
    },
    {
      id: "industrial-automation",
      title: "Industrial Automation",
      shortDescription: "Advanced automation solutions to enhance productivity and efficiency.",
      fullDescription:
        "Our industrial automation services help businesses enhance productivity, efficiency, and quality through the implementation of advanced automation technologies. We design, develop, and integrate automated systems that streamline manufacturing processes, reduce human error, and optimize resource utilization.",
      icon: <Settings className="h-10 w-10" />,
      color: "from-blue-500 to-indigo-600",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "PLC programming and integration",
        "SCADA system design",
        "Robotic system implementation",
        "Process automation",
        "Control system design",
      ],
      benefits: [
        "Increased production efficiency",
        "Improved product quality",
        "Reduced operational costs",
        "Enhanced workplace safety",
        "Data-driven process optimization",
      ],
    },
    {
      id: "maintenance-repair",
      title: "Maintenance & Repair",
      shortDescription: "Comprehensive maintenance and repair services for industrial equipment.",
      fullDescription:
        "Our maintenance and repair services ensure the optimal performance and longevity of your industrial equipment and systems. We offer preventive maintenance programs, emergency repair services, and equipment overhauls to minimize downtime, extend equipment life, and maintain operational efficiency.",
      icon: <Tool className="h-10 w-10" />,
      color: "from-amber-500 to-yellow-600",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Equipment overhaul and refurbishment",
        "Condition monitoring",
        "Maintenance planning and scheduling",
      ],
      benefits: [
        "Reduced equipment downtime",
        "Extended equipment lifespan",
        "Improved operational reliability",
        "Lower maintenance costs",
        "Optimized maintenance scheduling",
      ],
    },
  ]

  const processSteps = [
    {
      title: "Consultation",
      description:
        "We begin with a thorough consultation to understand your specific needs, requirements, and project objectives.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Design & Planning",
      description:
        "Our engineering team develops detailed designs and plans, incorporating innovative solutions and best practices.",
      icon: <Ruler className="h-8 w-8" />,
    },
    {
      title: "Fabrication & Implementation",
      description:
        "Using state-of-the-art equipment and techniques, we fabricate components and implement solutions with precision.",
      icon: <Hammer className="h-8 w-8" />,
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control procedures ensure that all deliverables meet or exceed industry standards and specifications.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Delivery & Installation",
      description:
        "We handle logistics, delivery, and installation to ensure your project is completed efficiently and effectively.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Support & Maintenance",
      description:
        "Our relationship continues with comprehensive support and maintenance services to ensure long-term success.",
      icon: <Wrench className="h-8 w-8" />,
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
                Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  {" "}
                  Engineering{" "}
                </span>
                Services
              </h1>
              <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
                Tilahun Engineering delivers premium metalwork and mechanical engineering solutions with precision,
                innovation, and excellence for industries across Ethiopia and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
                >
                  <Link href="#services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative overflow-hidden rounded-lg border border-zinc-800">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tilahun Engineering Services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        ref={overviewRef}
        className="w-full py-20 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Excellence{" "}
              </span>
              in Every Project
            </h2>
            <p className="text-lg text-zinc-300">
              At Tilahun Engineering, we offer a comprehensive range of engineering services designed to meet the
              diverse needs of industries across Ethiopia and East Africa. Our team of experienced engineers and
              technicians combines technical expertise with innovative approaches to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="p-3 rounded-lg inline-block mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
              <p className="text-zinc-400">
                We utilize the latest technologies and equipment to deliver precision engineering solutions that meet
                the highest standards of quality and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="p-3 rounded-lg inline-block mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-zinc-400">
                Our team of certified engineers and skilled technicians brings decades of combined experience to every
                project, ensuring exceptional results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="p-3 rounded-lg inline-block mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Timely Delivery</h3>
              <p className="text-zinc-400">
                We understand the importance of deadlines and are committed to delivering projects on time, every time,
                without compromising on quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Discover our comprehensive range of engineering services designed to meet the diverse needs of industries
              across Ethiopia and East Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>

                {/* Service Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  <div
                    className={cn(
                      "absolute top-4 left-4 p-3 rounded-lg bg-gradient-to-r text-white",
                      `${service.color}/20`,
                    )}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 mb-4">{service.shortDescription}</p>

                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    aria-expanded={expandedService === service.id}
                    aria-controls={`${service.id}-details`}
                  >
                    {expandedService === service.id ? "Show Less" : "Learn More"}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-300",
                        expandedService === service.id && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        id={`${service.id}-details`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-zinc-800 mt-4">
                          <p className="text-zinc-300 mb-4">{service.fullDescription}</p>

                          <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50">
                              <TabsTrigger value="features">Features</TabsTrigger>
                              <TabsTrigger value="benefits">Benefits</TabsTrigger>
                            </TabsList>
                            <TabsContent value="features" className="pt-4">
                              <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-zinc-300">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                            <TabsContent value="benefits" className="pt-4">
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-zinc-300">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                          </Tabs>

                          <div className="mt-6">
                            <Button
                              asChild
                              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                            >
                              <Link href={`/contact?service=${service.id}`}>Request This Service</Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="w-full py-20 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our Service
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Process</span>
            </h2>
            <p className="text-lg text-zinc-300">
              We follow a structured approach to ensure that every project is delivered with precision, efficiency, and
              excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-cyan-500 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={cn(
                      "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                      index % 2 === 0 ? "md:text-right" : "md:text-left",
                    )}
                  >
                    {/* Step content */}
                    <div
                      className={cn("md:col-span-1", index % 2 === 0 ? "md:text-right order-1" : "order-1 md:order-2")}
                    >
                      <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-zinc-400">{step.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] text-white">
                        {index + 1}
                      </div>
                    </div>

                    {/* Step number for mobile */}
                    <div
                      className={cn(
                        "md:hidden flex items-center gap-2 mb-2 absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold",
                      )}
                    >
                      {index + 1}
                    </div>

                    {/* Step icon */}
                    <div
                      className={cn(
                        "md:col-span-1 hidden md:block",
                        index % 2 === 0 ? "order-2" : "order-2 md:order-1",
                      )}
                    >
                      <div className={cn("flex items-center gap-4", index % 2 === 0 ? "justify-start" : "justify-end")}>
                        <div
                          className={cn(
                            "p-4 rounded-full bg-gradient-to-r text-white",
                            index % 2 === 0 ? "order-1" : "order-2",
                            index % 3 === 0
                              ? "from-cyan-500/20 to-blue-600/20 text-cyan-400"
                              : index % 3 === 1
                                ? "from-purple-500/20 to-indigo-600/20 text-purple-400"
                                : "from-emerald-500/20 to-green-600/20 text-emerald-400",
                          )}
                        >
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our Service
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Performance
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              We take pride in our track record of delivering exceptional engineering services with precision,
              efficiency, and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={500} duration={2} />+
              </h3>
              <p className="text-zinc-400">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={120} duration={2} />+
              </h3>
              <p className="text-zinc-400">Team Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={15} duration={2} />+
              </h3>
              <p className="text-zinc-400">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CounterAnimation value={98} duration={2} />%
              </h3>
              <p className="text-zinc-400">On-time Delivery</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="w-full py-20 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent_70%)]" />

        <div className="container relative">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_70%)]"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Engineering Project?
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
                      Get a Free Quote
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
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
