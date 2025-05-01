"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react"

// Project data (same as in projects/page.tsx)
const projects = [
  {
    id: "industrial-manufacturing-plant",
    title: "Industrial Manufacturing Plant",
    slug: "industrial-manufacturing-plant",
    client: "Ethiopian Manufacturing Corp",
    location: "Addis Ababa, Ethiopia",
    date: "2023",
    category: "Industrial",
    tags: ["Metal Fabrication", "Structural Engineering", "Industrial Automation"],
    featured: true,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Complete metal fabrication and installation for a major manufacturing facility in Addis Ababa.",
    fullDescription:
      "This comprehensive project involved the design, fabrication, and installation of metal structures and components for a state-of-the-art manufacturing facility in Addis Ababa. Our team provided end-to-end solutions, from initial concept development to final implementation, ensuring that all aspects of the project met the highest standards of quality and performance.",
    challenge:
      "The client required a custom-designed manufacturing facility that could accommodate specialized equipment while meeting strict safety and efficiency standards. The project timeline was aggressive, with only 8 months from design to completion.",
    solution:
      "Our team developed an innovative structural design that maximized space utilization while ensuring optimal workflow efficiency. We utilized advanced fabrication techniques and worked closely with the client to integrate their specialized equipment into the facility design. By implementing a phased construction approach and utilizing prefabricated components, we were able to complete the project on schedule.",
    results: [
      "Completed project on time and within budget",
      "Facility exceeded efficiency targets by 15%",
      "Zero safety incidents during construction",
      "Reduced energy consumption by 20% compared to industry standards",
    ],
    testimonial: {
      quote:
        "Tilahun Engineering delivered an exceptional manufacturing facility that has significantly enhanced our production capabilities. Their attention to detail and commitment to quality were evident throughout the project.",
      author: "Abebe Kebede",
      position: "CEO, Ethiopian Manufacturing Corp",
    },
  },
  {
    id: "custom-steel-bridge",
    title: "Custom Steel Bridge",
    slug: "custom-steel-bridge",
    client: "National Infrastructure Agency",
    location: "Bahir Dar, Ethiopia",
    date: "2022",
    category: "Infrastructure",
    tags: ["Structural Engineering", "Metal Fabrication", "Civil Engineering"],
    featured: true,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Design and construction of a custom steel bridge connecting two industrial complexes.",
    fullDescription:
      "This project involved the design and construction of a custom steel bridge spanning 120 meters across a river to connect two industrial complexes. Our team was responsible for the structural design, fabrication of steel components, and on-site assembly and installation of the bridge.",
    challenge:
      "The bridge needed to support heavy industrial traffic while withstanding seasonal flooding and maintaining aesthetic harmony with the surrounding environment. Additionally, the construction had to be completed with minimal disruption to river traffic.",
    solution:
      "We designed a truss bridge with high-strength steel components that were prefabricated in our facility and transported to the site for assembly. The design incorporated flood-resistant features and was aesthetically integrated with the surrounding landscape. We implemented a construction methodology that minimized in-river work and maintained navigational clearance throughout the project.",
    results: [
      "Bridge completed 2 months ahead of schedule",
      "Load capacity exceeds requirements by 25%",
      "Minimal environmental impact during construction",
      "Received Excellence in Engineering Design award",
    ],
    testimonial: {
      quote:
        "The bridge project completed by Tilahun Engineering stands as a testament to their engineering excellence and innovative approach to complex challenges.",
      author: "Daniel Tesfaye",
      position: "Director, National Infrastructure Agency",
    },
  },
  {
    id: "precision-machinery-components",
    title: "Precision Machinery Components",
    slug: "precision-machinery-components",
    client: "Addis Precision Technologies",
    location: "Addis Ababa, Ethiopia",
    date: "2023",
    category: "Custom Work",
    tags: ["Mechanical Design", "Metal Fabrication", "Precision Engineering"],
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Fabrication of high-precision components for specialized industrial machinery.",
    fullDescription:
      "This project involved the design and fabrication of high-precision components for specialized industrial machinery used in the pharmaceutical manufacturing sector. Our team worked closely with the client to understand their specific requirements and develop custom components that met their exacting standards.",
    challenge:
      "The components required tolerances of +/- 0.01mm and needed to be manufactured from specialized alloys that are difficult to machine. The client also required rapid prototyping and production to meet their market launch timeline.",
    solution:
      "We utilized our advanced CNC machining centers and implemented a rigorous quality control process to ensure that all components met the required tolerances. Our metallurgical expertise allowed us to work effectively with the specialized alloys, and we established a dedicated production line to meet the client's timeline requirements.",
    results: [
      "Delivered components with 100% quality acceptance rate",
      "Reduced production time by 30% compared to client's previous supplier",
      "Implemented cost-saving design modifications that reduced material usage by 15%",
      "Established ongoing production relationship for future component needs",
    ],
    testimonial: {
      quote:
        "The precision and quality of the components provided by Tilahun Engineering exceeded our expectations. Their technical expertise and commitment to meeting our timeline were invaluable to our project success.",
      author: "Sara Haile",
      position: "Technical Director, Addis Precision Technologies",
    },
  },
  {
    id: "automated-production-line",
    title: "Automated Production Line",
    slug: "automated-production-line",
    client: "Ethiopian Food Processing Co.",
    location: "Dire Dawa, Ethiopia",
    date: "2022",
    category: "Industrial Automation",
    tags: ["Industrial Automation", "Mechanical Design", "Electrical Engineering"],
    featured: true,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Design and implementation of a fully automated food processing production line.",
    fullDescription:
      "This project involved the design, fabrication, and implementation of a fully automated production line for a food processing facility. The system integrated conveyor systems, robotic handling, packaging equipment, and quality control systems into a seamless production process.",
    challenge:
      "The client needed to increase production capacity by 200% while improving product quality and reducing labor costs. The system needed to be designed for the specific food products being processed and had to comply with international food safety standards.",
    solution:
      "We designed a custom automation solution that incorporated the latest in food processing technology, including vision-based quality control systems and adaptive robotic handling. The system was designed with modularity in mind, allowing for future expansion and adaptation to new product lines.",
    results: [
      "Increased production capacity by 250%",
      "Reduced labor costs by 60%",
      "Improved product quality consistency by 40%",
      "System payback period of less than 18 months",
    ],
    testimonial: {
      quote:
        "The automated production line designed and implemented by Tilahun Engineering has transformed our business. The increase in production capacity and quality has allowed us to expand into new markets and significantly improve our profitability.",
      author: "Meron Tadesse",
      position: "Operations Manager, Ethiopian Food Processing Co.",
    },
  },
  {
    id: "solar-power-structure",
    title: "Solar Power Support Structure",
    slug: "solar-power-structure",
    client: "Green Energy Ethiopia",
    location: "Mekelle, Ethiopia",
    date: "2021",
    category: "Renewable Energy",
    tags: ["Structural Engineering", "Metal Fabrication", "Renewable Energy"],
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Design and fabrication of support structures for a 5MW solar power installation.",
    fullDescription:
      "This project involved the design and fabrication of support structures for a 5MW solar power installation in Mekelle. Our team was responsible for the structural design, fabrication, and installation of the mounting systems that support the solar panels.",
    challenge:
      "The structures needed to withstand high wind loads and varying terrain conditions while being cost-effective and quick to install. The remote location presented logistical challenges for material delivery and installation.",
    solution:
      "We designed a modular support system that could be easily adapted to different terrain conditions while maintaining structural integrity. The components were designed for efficient packing and transport, and we developed specialized installation tools and procedures to accelerate the on-site assembly process.",
    results: [
      "Completed installation 3 weeks ahead of schedule",
      "Structures withstood 120 km/h winds during severe weather event",
      "Reduced installation labor hours by 35% compared to conventional systems",
      "Zero structural failures in first 2 years of operation",
    ],
    testimonial: {
      quote:
        "The support structures provided by Tilahun Engineering have proven to be exceptionally durable and cost-effective. Their innovative design approach and attention to installation efficiency significantly contributed to the success of our solar project.",
      author: "Yonas Gebre",
      position: "Project Manager, Green Energy Ethiopia",
    },
  },
  {
    id: "hospital-expansion",
    title: "Hospital Expansion Project",
    slug: "hospital-expansion",
    client: "Addis Health Services",
    location: "Addis Ababa, Ethiopia",
    date: "2022",
    category: "Healthcare",
    tags: ["Structural Engineering", "Metal Fabrication", "Healthcare Facilities"],
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Structural engineering and metal fabrication for a major hospital expansion.",
    fullDescription:
      "This project involved the structural engineering and metal fabrication for a major hospital expansion, adding 150 beds and specialized treatment facilities. Our team provided comprehensive services from design through installation of structural elements and specialized medical equipment supports.",
    challenge:
      "The expansion needed to be integrated with the existing hospital building while minimizing disruption to ongoing operations. The structure had to accommodate complex medical systems and meet stringent healthcare facility standards.",
    solution:
      "We developed a phased construction approach with prefabricated structural elements that minimized on-site construction time. Our design incorporated flexible spaces that could adapt to evolving medical technologies and practices, and we worked closely with medical equipment suppliers to ensure proper integration of support systems.",
    results: [
      "Completed project with zero disruption to hospital operations",
      "Structure exceeded seismic safety requirements by 20%",
      "Flexible design has already accommodated two major equipment upgrades",
      "Project received National Healthcare Design Excellence Award",
    ],
    testimonial: {
      quote:
        "Tilahun Engineering's contribution to our hospital expansion was invaluable. Their understanding of healthcare facility requirements and ability to work within an operational hospital environment made them the perfect partner for this critical project.",
      author: "Dr. Tigist Bekele",
      position: "CEO, Addis Health Services",
    },
  },
  {
    id: "water-treatment-facility",
    title: "Water Treatment Facility",
    slug: "water-treatment-facility",
    client: "Addis Ababa Water Authority",
    location: "Addis Ababa, Ethiopia",
    date: "2021",
    category: "Infrastructure",
    tags: ["Structural Engineering", "Metal Fabrication", "Water Treatment"],
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Design and fabrication of structural components for a municipal water treatment facility.",
    fullDescription:
      "This project involved the design and fabrication of structural components for a municipal water treatment facility serving over 500,000 residents. Our team provided comprehensive engineering services for the facility's structural elements, including tanks, support structures, and specialized treatment equipment mounts.",
    challenge:
      "The facility needed to be constructed on challenging terrain with poor soil conditions, and the structural components had to withstand the corrosive environment of water treatment processes while meeting strict environmental regulations.",
    solution:
      "We designed a foundation system that addressed the soil stability issues and utilized corrosion-resistant materials and coatings for all structural components. Our design incorporated modular elements that could be maintained or replaced without disrupting facility operations, and we implemented environmental protection measures that exceeded regulatory requirements.",
    results: [
      "Facility has operated continuously without structural issues since completion",
      "Extended maintenance intervals due to corrosion-resistant design",
      "Reduced construction time by 25% through prefabrication",
      "Project received Environmental Engineering Excellence Award",
    ],
    testimonial: {
      quote:
        "The structural engineering expertise provided by Tilahun Engineering was crucial to the success of our water treatment facility. Their innovative solutions to our site challenges and attention to long-term durability have resulted in a facility that will serve our community reliably for decades to come.",
      author: "Getachew Tadesse",
      position: "Director, Addis Ababa Water Authority",
    },
  },
  {
    id: "commercial-building-retrofit",
    title: "Commercial Building Retrofit",
    slug: "commercial-building-retrofit",
    client: "Addis Commercial Properties",
    location: "Addis Ababa, Ethiopia",
    date: "2023",
    category: "Commercial",
    tags: ["Structural Engineering", "Metal Fabrication", "Building Retrofit"],
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    shortDescription: "Structural retrofit and modernization of a 12-story commercial building.",
    fullDescription:
      "This project involved the structural retrofit and modernization of a 12-story commercial building in downtown Addis Ababa. Our team provided comprehensive engineering services for the structural reinforcement, facade upgrades, and interior renovations.",
    challenge:
      "The building needed significant structural reinforcement to meet current seismic codes while remaining operational during the retrofit process. The facade and interior systems required modernization to improve energy efficiency and tenant appeal.",
    solution:
      "We developed a phased retrofit strategy that allowed the building to remain partially occupied during construction. Our design incorporated external reinforcement systems that minimized disruption to interior spaces, and we integrated energy-efficient facade elements that improved both the building's performance and aesthetic appeal.",
    results: [
      "Building now exceeds current seismic code requirements",
      "Energy consumption reduced by 35% through facade improvements",
      "Tenant occupancy increased from 65% to 95% following completion",
      "Project received Urban Renewal Excellence Award",
    ],
    testimonial: {
      quote:
        "Tilahun Engineering transformed our aging building into a modern, efficient, and attractive commercial property. Their ability to implement major structural improvements while keeping the building operational was impressive and crucial to our business continuity.",
      author: "Hanna Mekonnen",
      position: "Property Manager, Addis Commercial Properties",
    },
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const { slug } = params
  
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const overviewRef = useRef<HTMLDivElement>(null)
  const challengeRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const overviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const challengeInView = useInView(challengeRef, { once: true, amount: 0.3 })
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.3 })
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.3 })
  const testimonialInView = useInView(testimonialRef, { once: true, amount: 0.5 })

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10" />
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-zinc-400 hover:text-cyan-400 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-cyan-500/90 hover:bg-cyan-600 text-white border-none">
                {project.category}
              </Badge>
              {project.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  className="bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border-none"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-lg text-zinc-300 mb-8">{project.shortDescription}</p>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-zinc-800/50 text-cyan-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Year</p>
                  <p className="text-white font-medium">{project.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-zinc-800/50 text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-white font-medium">{project.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-zinc-800/50 text-cyan-400">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Client</p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section ref={overviewRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Project
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  {" "}
                  Overview
                </span>
              </h2>
              <div className="prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300">{project.fullDescription}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-50"></div>
              <div className="relative overflow-hidden rounded-lg border border-zinc-800">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section
        ref={challengeRef}
        className="w-full py-16 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={challengeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <p className="text-zinc-300">{project.challenge}</p>
            </div>
            <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
              <p className="text-zinc-300">{project.solution}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section ref={galleryRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
              Project
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Gallery
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg border border-zinc-800"
                  onClick={() => {
                    setCurrentImageIndex(index)
                    setLightboxOpen(true)
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2 bg-zinc-900/80 backdrop-blur-sm rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section
        ref={resultsRef}
        className="w-full py-16 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
              Project
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Results
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration
