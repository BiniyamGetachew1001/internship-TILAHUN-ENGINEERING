import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Montserrat as FontHeading } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DepthLayers from "@/components/depth-layers"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Tilahun Engineering PLC",
  description:
    "Engineering the Future in Steel - Professional metalwork and mechanical engineering company based in Ethiopia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Background elements */}
          <AnimatedBackground />
          <DepthLayers />

          <div className="relative flex min-h-screen flex-col z-10">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
