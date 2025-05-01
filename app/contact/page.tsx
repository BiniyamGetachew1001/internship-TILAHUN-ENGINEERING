"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

// Services offered by the company
const services = [
  { value: "metal-fabrication", label: "Metal Fabrication" },
  { value: "welding-services", label: "Welding Services" },
  { value: "mechanical-design", label: "Mechanical Design" },
  { value: "structural-engineering", label: "Structural Engineering" },
  { value: "industrial-automation", label: "Industrial Automation" },
  { value: "maintenance-repair", label: "Maintenance & Repair" },
  { value: "other", label: "Other Services" },
]

// FAQ items
const faqItems = [
  {
    question: "What information should I include in my inquiry?",
    answer:
      "To help us respond to your inquiry more effectively, please include details about your project requirements, timeline, budget considerations, and any specific technical specifications. The more information you provide, the better we can tailor our response to your needs.",
  },
  {
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate the urgency in your subject line or consider calling our office directly for immediate assistance.",
  },
  {
    question: "Do you provide services outside of Ethiopia?",
    answer:
      "Yes, we provide engineering services throughout East Africa and can consider projects in other regions on a case-by-case basis. Please specify your project location in your inquiry, and we'll be happy to discuss how we can support your needs.",
  },
  {
    question: "Can I request a site visit before receiving a quote?",
    answer:
      "Yes, for projects within Ethiopia, we can arrange a site visit to better understand your requirements before providing a detailed quote. Please mention this in your inquiry, and our team will coordinate with you to schedule a convenient time.",
  },
  {
    question: "Do you offer consultations for preliminary project planning?",
    answer:
      "Yes, we offer initial consultations to discuss project feasibility, approach, and preliminary planning. These consultations can be conducted in person at our office, on-site, or virtually, depending on your preference and location.",
  },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const formInView = useInView(formRef, { once: true, amount: 0.3 })
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 })
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 })

  // Form handling
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setFormStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        form.reset()
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Touch </span>
              With Us
            </h1>
            <p className="text-lg text-zinc-300 mb-8">
              Have a project in mind or questions about our services? We're here to help. Reach out to our team and
              discover how Tilahun Engineering can deliver exceptional results for your business.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
              >
                <a href="#contact-form">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              id="contact-form"
              initial={{ opacity: 0, x: -20 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Send Us a Message</h2>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-900/20 border border-emerald-800 rounded-lg p-6 text-center"
                  >
                    <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-zinc-300 mb-4">
                      Thank you for contacting Tilahun Engineering. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : formStatus === "error" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-900/20 border border-red-800 rounded-lg p-6 text-center"
                  >
                    <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Could Not Be Sent</h3>
                    <p className="text-zinc-300 mb-4">
                      There was an error sending your message. Please try again or contact us directly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormStatus("idle")}
                      className="border-red-800 text-white hover:bg-red-900/50"
                    >
                      Try Again
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  {...field}
                                  className="bg-zinc-800/50 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your email address"
                                  {...field}
                                  className="bg-zinc-800/50 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your phone number"
                                  {...field}
                                  className="bg-zinc-800/50 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Service (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-zinc-800/50 border-zinc-700 focus:ring-cyan-500 ring-offset-black">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-900 border-zinc-700">
                                  {services.map((service) => (
                                    <SelectItem key={service.value} value={service.value}>
                                      {service.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Subject of your message"
                                {...field}
                                className="bg-zinc-800/50 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message"
                                {...field}
                                rows={5}
                                className="bg-zinc-800/50 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={cn(
                          "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300",
                          formStatus === "submitting" && "opacity-80",
                        )}
                      >
                        {formStatus === "submitting" ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, x: 20 }}
              animate={mapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>

              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Location</h2>

                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-6">
                  {/* Map iframe with custom styling */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5384522351544!2d38.74631491478937!3d9.02139499358961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%) saturate(80%)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setIsMapLoaded(true)}
                    className={cn("transition-opacity duration-500", isMapLoaded ? "opacity-100" : "opacity-0")}
                  ></iframe>

                  {/* Loading state */}
                  {!isMapLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80">
                      <svg
                        className="animate-spin h-10 w-10 text-cyan-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <h3 className="text-lg font-semibold text-white mb-2">Tilahun Engineering PLC</h3>
                  <p className="text-zinc-300">
                    Industrial Zone, Building 42
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section ref={infoRef} className="w-full py-16 bg-zinc-900/50 border-y border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Get In
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Touch</span>
            </h2>
            <p className="text-lg text-zinc-300">
              Have questions or need more information? Reach out to us through any of the following channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-zinc-400 mb-4">Call us directly</p>
                <a href="tel:+251911234567" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  +251 911 234 567
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-zinc-400 mb-4">Send us an email</p>
                <a
                  href="mailto:info@tilahunengineering.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  info@tilahunengineering.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-zinc-400 mb-4">Visit our office</p>
                <p className="text-white">
                  Industrial Zone, Building 42
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_70%)]"></div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                <p className="text-zinc-400 mb-4">Our working hours</p>
                <p className="text-white">
                  Monday - Friday: 8:30 AM - 5:30 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-lg text-zinc-300">
              Find answers to common questions about contacting and working with Tilahun Engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-zinc-300">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Engineering Project?
              </h2>
              <p className="text-zinc-300 mb-8">
                Contact us today to discuss your project requirements and discover how Tilahun Engineering can deliver
                exceptional results for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
                >
                  <a href="#contact-form">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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
        </div>
      </section>
    </main>
  )
}
