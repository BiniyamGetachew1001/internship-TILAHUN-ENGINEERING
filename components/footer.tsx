import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black/80 backdrop-blur-md relative overflow-hidden">
      {/* Add subtle gradient line at the top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-800/30 to-transparent"></div>

      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.03),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-soft-light"></div>

      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              TILAHUN ENGINEERING
            </h3>
            <p className="text-zinc-400 max-w-xs">
              Engineering the Future in Steel. Professional metalwork and mechanical engineering company based in
              Ethiopia.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-cyan-400 hover:bg-zinc-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-cyan-400 hover:bg-zinc-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-cyan-400 hover:bg-zinc-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-cyan-400 hover:bg-zinc-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-cyan-400 hover:bg-zinc-900">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Careers", path: "/careers" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>
                  Addis Ababa, Ethiopia
                  <br />
                  Industrial Zone, Building 42
                </span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>+251 911 234 567</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>info@tilahunengineering.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg text-white">Newsletter</h3>
            <p className="text-zinc-400">Subscribe to our newsletter to receive updates and news.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-zinc-900 border-zinc-800 focus-visible:ring-cyan-500"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Tilahun Engineering PLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-zinc-500 text-sm hover:text-zinc-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-500 text-sm hover:text-zinc-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-zinc-500 text-sm hover:text-zinc-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
