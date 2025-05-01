"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Clock,
  MapPin,
  Users,
  Heart,
  Zap,
  Award,
  Lightbulb,
  Coffee,
  DollarSign,
  Leaf,
  Shield,
  Smile,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Job listings data
const jobListings = [
  {
    id: "senior-mechanical-engineer",
    title: "Senior Mechanical Engineer",
    department: "Engineering",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    experience: "5+ years",
    salary: "Competitive",
    posted: "2 weeks ago",
    featured: true,
    description:
      "We are seeking an experienced Senior Mechanical Engineer to lead complex engineering projects and mentor junior team members. The ideal candidate will have extensive experience in mechanical design, analysis, and project management.",
    responsibilities: [
      "Lead mechanical engineering projects from concept to completion",
      "Develop detailed designs and specifications for mechanical systems and components",
      "Perform engineering calculations and analysis to ensure designs meet requirements",
      "Mentor and guide junior engineers in technical aspects of projects",
      "Collaborate with cross-functional teams to ensure project success",
      "Ensure compliance with industry standards and regulations",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering (Master's preferred)",
      "5+ years of experience in mechanical engineering, preferably in industrial or manufacturing settings",
      "Proficiency in CAD software (SolidWorks, AutoCAD, etc.)",
      "Experience with FEA and other engineering analysis tools",
      "Strong project management skills",
      "Excellent communication and leadership abilities",
    ],
  },
  {
    id: "structural-engineer",
    title: "Structural Engineer",
    department: "Engineering",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    experience: "3+ years",
    salary: "Competitive",
    posted: "1 week ago",
    featured: true,
    description:
      "We are looking for a skilled Structural Engineer to join our team and contribute to the design and analysis of structural systems for various projects. The successful candidate will work on challenging projects across industrial, commercial, and infrastructure sectors.",
    responsibilities: [
      "Design structural systems and components for various projects",
      "Perform structural analysis and calculations",
      "Prepare technical drawings and specifications",
      "Ensure designs comply with building codes and safety standards",
      "Collaborate with architects and other engineers",
      "Conduct site visits to assess structural conditions",
    ],
    requirements: [
      "Bachelor's degree in Civil/Structural Engineering",
      "3+ years of experience in structural engineering",
      "Proficiency in structural analysis software",
      "Knowledge of building codes and standards",
      "Strong analytical and problem-solving skills",
      "Good communication and teamwork abilities",
    ],
  },
  {
    id: "welding-technician",
    title: "Welding Technician",
    department: "Production",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    experience: "2+ years",
    salary: "Competitive",
    posted: "3 days ago",
    featured: false,
    description:
      "We are seeking skilled Welding Technicians to join our production team. The ideal candidates will have experience with various welding techniques and be able to work with precision on complex metal fabrication projects.",
    responsibilities: [
      "Perform welding operations using MIG, TIG, and stick welding techniques",
      "Read and interpret technical drawings and welding symbols",
      "Set up welding equipment and prepare materials for welding",
      "Inspect completed welds for quality and compliance with specifications",
      "Maintain welding equipment and work area",
      "Follow safety procedures and use appropriate protective equipment",
    ],
    requirements: [
      "Technical certificate or diploma in welding",
      "2+ years of experience in industrial welding",
      "Proficiency in multiple welding techniques (MIG, TIG, stick)",
      "Ability to read and interpret technical drawings",
      "Knowledge of metallurgy and welding procedures",
      "Strong attention to detail and commitment to quality",
    ],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    department: "Project Management",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    experience: "4+ years",
    salary: "Competitive",
    posted: "1 month ago",
    featured: false,
    description:
      "We are looking for an experienced Project Manager to oversee engineering projects from initiation to completion. The successful candidate will be responsible for planning, executing, and closing projects while ensuring they are delivered on time, within scope, and within budget.",
    responsibilities: [
      "Develop and maintain project plans, schedules, and budgets",
      "Coordinate project activities and resources",
      "Manage project risks and issues",
      "Communicate project status to stakeholders",
      "Ensure project deliverables meet quality standards",
      "Lead and motivate project team members",
    ],
    requirements: [
      "Bachelor's degree in Engineering, Construction Management, or related field",
      "4+ years of experience in project management, preferably in engineering or construction",
      "PMP certification preferred",
      "Strong leadership and team management skills",
      "Excellent communication and negotiation abilities",
      "Proficiency in project management software",
    ],
  },
  {
    id: "quality-control-inspector",
    title: "Quality Control Inspector",
    department: "Quality Assurance",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    experience: "2+ years",
    salary: "Competitive",
    posted: "2 weeks ago",
    featured: false,
    description:
      "We are seeking a detail-oriented Quality Control Inspector to ensure that our products and services meet the highest standards of quality. The successful candidate will be responsible for inspecting materials, components, and finished products to verify compliance with specifications and quality standards.",
    responsibilities: [
      "Inspect materials, components, and finished products for defects and deviations from specifications",
      "Perform quality tests and measurements using various tools and equipment",
      "Document inspection results and maintain quality records",
      "Identify and report quality issues and non-conformances",
      "Recommend improvements to production processes",
      "Ensure compliance with quality standards and procedures",
    ],
    requirements: [
      "Technical diploma or degree in a relevant field",
      "2+ years of experience in quality control or inspection",
      "Knowledge of quality control methods and standards",
      "Experience with measuring tools and inspection equipment",
      "Strong attention to detail and analytical skills",
      "Good documentation and reporting abilities",
    ],
  },
  {
    id: "electrical-engineer",
    title: "Electrical Engineer",
    department: "Engineering",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    experience: "3+ years",
    salary: "Competitive",
    posted: "1 week ago",
    featured: false,
    description:
      "We are looking for an Electrical Engineer to design, develop, and test electrical systems and components for our projects. The successful candidate will work on a variety of industrial and commercial projects, ensuring that electrical systems meet specifications and comply with relevant codes and standards.",
    responsibilities: [
      "Design electrical systems and components for various projects",
      "Develop specifications and technical documentation",
      "Perform electrical calculations and analysis",
      "Select appropriate electrical equipment and materials",
      "Collaborate with other engineering disciplines",
      "Ensure compliance with electrical codes and standards",
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering",
      "3+ years of experience in electrical engineering",
      "Knowledge of electrical codes and standards",
      "Experience with electrical design software",
      "Strong problem-solving and analytical skills",
      "Good communication and teamwork abilities",
    ],
  },
]

// Benefits data
const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer industry-leading compensation packages to attract and retain top talent.",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance coverage for you and your family.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Professional Development",
    description: "Continuous learning opportunities, including workshops, courses, and certifications.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Career Growth",
    description: "Clear career paths and opportunities for advancement within the company.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements to help you maintain a healthy work-life balance.",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: "Collaborative Environment",
    description: "Work with talented professionals in a supportive and collaborative atmosphere.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Recognition Programs",
    description: "Regular recognition of outstanding performance and contributions.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Innovation Culture",
    description: "An environment that encourages creative thinking and innovative solutions.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Social Events",
    description: "Regular team-building activities and social events to foster camaraderie.",
    icon: <Coffee className="h-6 w-6" />,
  },
  {
    title: "Sustainable Workplace",
    description: "Commitment to environmental sustainability in our operations and projects.",
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    title: "Employee Wellness",
    description: "Programs and initiatives focused on physical and mental wellbeing.",
    icon: <Smile className="h-6 w-6" />,
  },
  {
    title: "Performance Bonuses",
    description: "Reward system based on individual and team performance achievements.",
    icon: <Star className="h-6 w-6" />,
  },
]

// Culture values
const cultureValues = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from the quality of our engineering solutions to the service we provide to our clients.",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation and continuously seek new technologies and approaches to solve complex engineering challenges.",
  },
  {
    title: "Integrity",
    description:
      "We conduct our business with the highest level of integrity, honesty, and ethical standards, building trust with our clients and within our team.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster a collaborative environment where diverse perspectives lead to better solutions.",
  },
  {
    title: "Continuous Learning",
    description:
      "We are committed to continuous learning and professional development, staying at the forefront of industry advancements.",
  },
  {
    title: "Respect",
    description:
      "We treat everyone with respect and dignity, valuing diversity and creating an inclusive workplace where all can thrive.",
  },
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [selectedJob, setSelectedJob] = useState<(typeof jobListings)[0] | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const jobsRef = useRef<HTMLDivElement>(null)
  const cultureRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

  const jobsInView = useInView(jobsRef, { once: true, amount: 0.2 })
  const cultureInView = useInView(cultureRef, { once: true, amount: 0.3 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const processInView = useInView(processRef, { once: true, amount: 0.3 })

  // Filter jobs by department
  const filteredJobs = selectedDepartment
    ? jobListings.filter((job) => job.department === selectedDepartment)
    : jobListings

  // Get unique departments
  const departments = ["All Departments", ...new Set(jobListings.map((job) => job.department))]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  {" "}
                  Engineering{" "}
                </span>
                Team
              </h1>
              <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
                At Tilahun Engineering, we're building the future of engineering in Ethiopia. Join our team of talented
                professionals and be part of innovative projects that make a difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
                >
                  <a href="#open-positions">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
                >
                  <Link href="/contact">Contact Recruitment Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative overflow-hidden rounded-lg border border-zinc-800">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tilahun Engineering Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="open-positions"
        ref={jobsRef}
        className="w-full py-16 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Open
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Positions
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Explore our current job openings and find the perfect opportunity to grow your career with Tilahun
              Engineering.
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-8"
          >
            {departments.map((department) => (
              <Button
                key={department}
                variant={
                  selectedDepartment === department || (department === "All Departments" && !selectedDepartment)
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setSelectedDepartment(department === "All Departments" ? null : department)}
                className={cn(
                  "rounded-full",
                  selectedDepartment === department || (department === "All Departments" && !selectedDepartment)
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                    : "border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white",
                )}
              >
                {department}
              </Button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={cn(
                    "bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden",
                    selectedJob?.id === job.id && "ring-2 ring-cyan-500",
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{job.title}</h3>
                          {job.featured && (
                            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-cyan-400" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-cyan-400" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-cyan-400" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4 text-cyan-400" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-zinc-500">Posted {job.posted}</span>
                        <Button
                          onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                          variant="outline"
                          className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400"
                        >
                          {selectedJob?.id === job.id ? "Hide Details" : "View Details"}
                        </Button>
                      </div>
                    </div>

                    {/* Job Details */}
                    {selectedJob?.id === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-zinc-800"
                      >
                        <p className="text-zinc-300 mb-6">{job.description}</p>

                        <Tabs defaultValue="responsibilities" className="w-full">
                          <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50">
                            <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                            <TabsTrigger value="requirements">Requirements</TabsTrigger>
                          </TabsList>
                          <TabsContent value="responsibilities" className="pt-4">
                            <ul className="space-y-2">
                              {job.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="rounded-full bg-cyan-500/20 p-1 mt-0.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                                  </div>
                                  <span className="text-zinc-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                          <TabsContent value="requirements" className="pt-4">
                            <ul className="space-y-2">
                              {job.requirements.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="rounded-full bg-cyan-500/20 p-1 mt-0.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                                  </div>
                                  <span className="text-zinc-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                        </Tabs>

                        <div className="mt-6">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
                          >
                            <Link href={`/careers/apply?job=${job.id}`}>
                              Apply for this Position
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 text-center"
              >
                <p className="text-zinc-300 mb-4">No positions currently available in this department.</p>
                <Button
                  onClick={() => setSelectedDepartment(null)}
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400"
                >
                  View All Departments
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section ref={cultureRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cultureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our Company
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Culture</span>
            </h2>
            <p className="text-lg text-zinc-300">
              At Tilahun Engineering, we foster a culture of innovation, collaboration, and excellence. Our values guide
              everything we do and shape our work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={cultureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cultureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="w-full py-16 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Employee
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Benefits
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              We value our team members and offer a comprehensive benefits package designed to support your professional
              growth, health, and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index % 8) * 0.1 }}
                className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section ref={processRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Application
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Process</span>
            </h2>
            <p className="text-lg text-zinc-300">
              Our recruitment process is designed to identify talented individuals who share our values and can
              contribute to our mission. Here's what to expect when you apply.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Process center line */}
              <div className="absolute left-[15px] md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-cyan-500"></div>

              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Application Submission",
                    description:
                      "Submit your application through our online portal, including your resume, cover letter, and any required documents.",
                  },
                  {
                    step: 2,
                    title: "Initial Screening",
                    description:
                      "Our recruitment team reviews applications to identify candidates whose qualifications and experience match the position requirements.",
                  },
                  {
                    step: 3,
                    title: "Technical Assessment",
                    description:
                      "Depending on the role, you may be asked to complete a technical assessment or skills test to demonstrate your expertise.",
                  },
                  {
                    step: 4,
                    title: "Interviews",
                    description:
                      "Selected candidates participate in interviews with hiring managers, team members, and potentially senior leadership.",
                  },
                  {
                    step: 5,
                    title: "Final Selection",
                    description:
                      "We evaluate all candidates based on their qualifications, experience, cultural fit, and interview performance.",
                  },
                  {
                    step: 6,
                    title: "Offer & Onboarding",
                    description:
                      "Successful candidates receive an offer letter, and upon acceptance, begin our comprehensive onboarding process.",
                  },
                ].map((item, index) => (
                  <div key={item.step} className="relative">
                    <div
                      className={cn(
                        "flex items-start gap-6",
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right",
                      )}
                    >
                      {/* Step number */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                          {item.step}
                        </div>
                      </div>

                      {/* Step content */}
                      <div className="flex-grow">
                        <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]"></div>
                          <div className="relative">
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-zinc-400">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-zinc-900/50 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent_70%)]" />

        <div className="container relative">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_70%)]"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
              <p className="text-zinc-300 mb-8">
                Explore our current openings and take the first step toward a rewarding career at Tilahun Engineering.
                We're looking for talented individuals who are passionate about making a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
                >
                  <a href="#open-positions">
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-300"
                >
                  <Link href="/contact">Contact Recruitment Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
