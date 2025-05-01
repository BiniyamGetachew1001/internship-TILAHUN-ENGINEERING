"use client"

import { useState } from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote, Building, CheckCircle, Users, Clock, Star } from "lucide-react"
import { cn } from "@/lib/utils"

// Client data
const clients = [
  {
    id: "ethiopian-manufacturing-corp",
    name: "Ethiopian Manufacturing Corp",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Manufacturing",
    location: "Addis Ababa, Ethiopia",
    description:
      "A leading manufacturing company specializing in consumer goods production with facilities across Ethiopia.",
    projects: [
      {
        title: "Industrial Manufacturing Plant",
        description: "Complete metal fabrication and installation for a major manufacturing facility in Addis Ababa.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "Tilahun Engineering delivered an exceptional manufacturing facility that has significantly enhanced our production capabilities. Their attention to detail and commitment to quality were evident throughout the project.",
      author: "Abebe Kebede",
      position: "CEO, Ethiopian Manufacturing Corp",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "national-infrastructure-agency",
    name: "National Infrastructure Agency",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Government",
    location: "Bahir Dar, Ethiopia",
    description:
      "A government agency responsible for planning, developing, and maintaining national infrastructure projects.",
    projects: [
      {
        title: "Custom Steel Bridge",
        description: "Design and construction of a custom steel bridge connecting two industrial complexes.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Highway Overpass",
        description: "Structural engineering and fabrication for a major highway overpass project.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "The bridge project completed by Tilahun Engineering stands as a testament to their engineering excellence and innovative approach to complex challenges.",
      author: "Daniel Tesfaye",
      position: "Director, National Infrastructure Agency",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "addis-precision-technologies",
    name: "Addis Precision Technologies",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Technology",
    location: "Addis Ababa, Ethiopia",
    description:
      "A technology company specializing in precision equipment and components for various industrial applications.",
    projects: [
      {
        title: "Precision Machinery Components",
        description: "Fabrication of high-precision components for specialized industrial machinery.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "The precision and quality of the components provided by Tilahun Engineering exceeded our expectations. Their technical expertise and commitment to meeting our timeline were invaluable to our project success.",
      author: "Sara Haile",
      position: "Technical Director, Addis Precision Technologies",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "ethiopian-food-processing",
    name: "Ethiopian Food Processing Co.",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Food & Beverage",
    location: "Dire Dawa, Ethiopia",
    description:
      "A food processing company producing a wide range of food products for domestic and international markets.",
    projects: [
      {
        title: "Automated Production Line",
        description: "Design and implementation of a fully automated food processing production line.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Robotic Welding System",
        description: "Implementation of automated robotic welding system for high-volume production.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "The automated production line designed and implemented by Tilahun Engineering has transformed our business. The increase in production capacity and quality has allowed us to expand into new markets and significantly improve our profitability.",
      author: "Meron Tadesse",
      position: "Operations Manager, Ethiopian Food Processing Co.",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "green-energy-ethiopia",
    name: "Green Energy Ethiopia",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Renewable Energy",
    location: "Mekelle, Ethiopia",
    description: "A renewable energy company focused on developing sustainable energy solutions across Ethiopia.",
    projects: [
      {
        title: "Solar Power Support Structure",
        description: "Design and fabrication of support structures for a 5MW solar power installation.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Wind Turbine Components",
        description: "Fabrication of precision components for wind turbine installations.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "The support structures provided by Tilahun Engineering have proven to be exceptionally durable and cost-effective. Their innovative design approach and attention to installation efficiency significantly contributed to the success of our solar project.",
      author: "Yonas Gebre",
      position: "Project Manager, Green Energy Ethiopia",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "addis-health-services",
    name: "Addis Health Services",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Healthcare",
    location: "Addis Ababa, Ethiopia",
    description: "A healthcare provider operating hospitals and medical facilities throughout Ethiopia.",
    projects: [
      {
        title: "Hospital Expansion Project",
        description: "Structural engineering and metal fabrication for a major hospital expansion.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Medical Equipment Supports",
        description: "Custom-designed support structures for specialized medical equipment.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "Tilahun Engineering's contribution to our hospital expansion was invaluable. Their understanding of healthcare facility requirements and ability to work within an operational hospital environment made them the perfect partner for this critical project.",
      author: "Dr. Tigist Bekele",
      position: "CEO, Addis Health Services",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "addis-water-authority",
    name: "Addis Ababa Water Authority",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Utilities",
    location: "Addis Ababa, Ethiopia",
    description: "The municipal authority responsible for water supply and treatment in Addis Ababa.",
    projects: [
      {
        title: "Water Treatment Facility",
        description: "Design and fabrication of structural components for a municipal water treatment facility.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "The structural engineering expertise provided by Tilahun Engineering was crucial to the success of our water treatment facility. Their innovative solutions to our site challenges and attention to long-term durability have resulted in a facility that will serve our community reliably for decades to come.",
      author: "Getachew Tadesse",
      position: "Director, Addis Ababa Water Authority",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "addis-commercial-properties",
    name: "Addis Commercial Properties",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Real Estate",
    location: "Addis Ababa, Ethiopia",
    description:
      "A commercial real estate developer with properties throughout Addis Ababa and other major Ethiopian cities.",
    projects: [
      {
        title: "Commercial Building Retrofit",
        description: "Structural retrofit and modernization of a 12-story commercial building.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Retail Store Fixtures",
        description: "Custom metal fixtures and displays for high-end retail environments.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    testimonial: {
      quote:
        "Tilahun Engineering transformed our aging building into a modern, efficient, and attractive commercial property. Their ability to implement major structural improvements while keeping the building operational was impressive and crucial to our business continuity.",
      author: "Hanna Mekonnen",
      position: "Property Manager, Addis Commercial Properties",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
]

// Industries for filtering
const industries = [
  "All Industries",
  "Manufacturing",
  "Government",
  "Technology",
  "Food & Beverage",
  "Renewable Energy",
  "Healthcare",
  "Utilities",
  "Real Estate",
]

// Success metrics
const successMetrics = [
  {
    title: "Client Satisfaction",
    value: "98%",
    description: "of our clients rate our services as excellent or very good",
    icon: <Star className="h-8 w-8" />,
  },
  {
    title: "Projects Completed",
    value: "500+",
    description: "successful projects delivered across various industries",
    icon: <CheckCircle className="h-8 w-8" />,
  },
  {
    title: "Client Retention",
    value: "95%",
    description: "of our clients return for additional projects",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "On-Time Delivery",
    value: "97%",
    description: "of projects completed on or ahead of schedule",
    icon: <Clock className="h-8 w-8" />,
  },
]

export default function ClientsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")

  const heroRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const partnershipsRef = useRef<HTMLDivElement>(null)

  const clientsInView = useInView(clientsRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 })
  const partnershipsInView = useInView(partnershipsRef, { once: true, amount: 0.3 })

  // Filter clients by industry
  const filteredClients = selectedIndustry === "All Industries"
    ? clients
    : clients.filter((client) => client.industry === selectedIndustry)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Valued
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Clients
              </span>
            </h1>
            <p className="text-lg text-zinc-300 mb-8">
              We're proud to partner with leading organizations across various industries, delivering exceptional
              engineering solutions that drive their success.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
              >
                <a href="#client-showcase">
                  View Our Clients
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section
        id="client-showcase"
        ref={clientsRef}
        className="w-full py-16 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Client
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Showcase
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Explore our diverse portfolio of clients across various industries and discover how we've helped them
              achieve their engineering goals.
            </p>
          </motion.div>

          {/* Industry Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIndustry(industry)}
                className={cn(
                  "rounded-full text-sm whitespace-nowrap",
                  selectedIndustry === industry
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                    : "border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white",
                )}
              >
                {industry}
              </Button>
            ))}
          </motion.div>

          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={clientsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-center h-20 mb-4 bg-zinc-800/50 rounded-lg p-4">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={150}
                      height={60}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{client.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm text-zinc-400">{client.industry}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4 flex-grow">{client.description}</p>
                  <div className="mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Link href={`#${client.id}`}>
                        View Projects
                        <ArrowRight className="ml-1 h-3 w-3 opacity-70 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredClients.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 text-center"
            >
              <p className="text-zinc-300 mb-4">No clients found in this industry.</p>
              <Button
                onClick={() => setSelectedIndustry("All Industries")}
                variant="outline"
                className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              >
                View All Industries
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section ref={testimonialsRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Client
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Testimonials
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Hear what our clients have to say about their experience working with Tilahun Engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.slice(0, 6).map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
                <div className="relative">
                  <Quote className="h-8 w-8 text-cyan-400 mb-4 opacity-50" />
                  <p className="text-zinc-300 mb-6 italic">{client.testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-zinc-700">
                      <Image
                        src={client.testimonial.image || "/placeholder.svg"}
                        alt={client.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{client.testimonial.author}</h4>
                      <p className="text-sm text-zinc-400">{client.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section
        ref={metricsRef}
        className="w-full py-16 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Client Success
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Metrics
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Our commitment to excellence is reflected in our client success metrics, showcasing our dedication to
              delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                    {metric.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{metric.value}</h3>
                  <h4 className="text-lg font-medium text-cyan-400 mb-2">{metric.title}</h4>
                  <p className="text-zinc-400">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Projects Section */}
      <section className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Client
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Projects
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Explore some of our most successful client projects across various industries.
            </p>
          </div>

          <div className="space-y-16">
            {clients.map((client) => (
              <div key={client.id} id={client.id} className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-zinc-800/50 rounded-lg p-4 flex items-center justify-center h-24 mb-4">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          width={200}
                          height={80}
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Building className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-zinc-400">{client.industry}</span>
                      </div>
                      <p className="text-zinc-300 mb-4">{client.description}</p>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-medium text-white mb-4">Projects for {client.name}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {client.projects.map((project) => (
                          <div key={project.title} className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
                            <div className="relative h-48">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h5 className="font-medium text-white mb-2">{project.title}</h5>
                              <p className="text-sm text-zinc-400">{project.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section
        ref={partnershipsRef}
        className="w-full py-16 bg-zinc-900/50 border-t border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={partnershipsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Become Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Next Success Story?
              </span>
            </h2>
            <p className="text-lg text-zinc-300 mb-8">
              Contact us today to discuss your project requirements and discover how Tilahun Engineering can deliver
              exceptional results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.65)] transition-all duration-300"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
