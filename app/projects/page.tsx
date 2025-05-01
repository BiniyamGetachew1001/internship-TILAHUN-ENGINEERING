"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Filter, X, ExternalLink, Calendar, MapPin, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

// Project data
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

// Available categories for filtering
const categories = [
  "All",
  "Industrial",
  "Infrastructure",
  "Custom Work",
  "Industrial Automation",
  "Renewable Energy",
  "Healthcare",
  "Commercial",
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleProjects, setVisibleProjects] = useState(projects)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const filterInView = useInView(filterRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 })

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          project.shortDescription.toLowerCase().includes(query),
      )
    }

    setVisibleProjects(filtered)
  }, [selectedCategory, searchQuery])

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Engineering{" "}
              </span>
              Projects
            </h1>
            <p className="text-lg text-zinc-300 mb-8">
              Explore our portfolio of successful engineering projects delivered with precision, innovation, and
              excellence across Ethiopia and beyond.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section
        id="projects"
        ref={filterRef}
        className="sticky top-20 z-30 w-full py-6 bg-black/80 backdrop-blur-md border-y border-zinc-800"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={filterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="h-4 w-4 text-zinc-400 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "rounded-full text-sm whitespace-nowrap",
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                        : "border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white",
                    )}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search
                className={cn(
                  "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors",
                  isSearchFocused ? "text-cyan-400" : "text-zinc-400",
                )}
              />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="pl-9 bg-zinc-900/50 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          {visibleProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-zinc-400 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              >
                Reset Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} inView={projectsInView} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent_70%)]" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Engineering Project?
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
        </div>
      </section>
    </main>
  )
}

// Project Card Component
interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  inView: boolean
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-sm"></div>
      <div className="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              Featured
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-zinc-900/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {project.category}
          </div>

          {/* Hover Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 transition-opacity duration-300",
              isHovered && "opacity-100",
            )}
          />
        </div>

        {/* Project Content */}
        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-zinc-400 mb-4">{project.shortDescription}</p>

          {/* Project Details */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Tag className="h-4 w-4" />
              <span>{project.client}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border-none">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border-none">
                +{project.tags.length - 3} more
              </Badge>
            )}
          </div>

          <Button
            asChild
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
          >
            <Link href={`/projects/${project.slug}`}>View Project Details</Link>
          </Button>
        </div>

        {/* Quick View Button */}
        <div
          className={cn(
            "absolute top-3 right-3 p-2 bg-zinc-900/80 backdrop-blur-sm rounded-full opacity-0 transition-opacity duration-300",
            isHovered && "opacity-100",
          )}
        >
          <Link href={`/projects/${project.slug}`}>
            <ExternalLink className="h-4 w-4 text-white" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
