import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { DarkProvider } from "@/providers/DarkProvider";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anujjoshi.netlify.app/"),
  title: "Anuj Joshi - Portfolio",
  description: `I'm Anuj Joshi, a passionate learner and tech enthusiast with a deep interest in web development, AI/ML, and web3 technologies. I enjoy applying my skills to solve real-world problems through innovative projects. My journey has been shaped by continuous learning, collaborative projects, and a commitment to making a positive impact in the tech community.`,
  keywords:
    "Anuj Joshi, Computer Science Engineer, DTU, Web Development, AI, ML, Web3, Robotics, Software Engineering, Machine Learning, Resume, Hire Me, Technical Blog, Portfolio, Society of Robotics, LIMSTIR, Full Stack Developer, Data Science, Deep Learning, ReactJS, JavaScript, Python, CSE, Web3 Developer",
  authors: { name: "Anuj Joshi", url: "https://anujjoshi.netlify.app/" },
  creator: "Anuj Joshi",
  openGraph: {
    title: "%s | Anuj Joshi - Portfolio",
    description: `Explore my portfolio showcasing my skills in web development, AI/ML, and more. Let's collaborate and build something great!`,
    images: [
      {
        url: "https://anujjoshi.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Anuj Joshi Portfolio Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Joshi - Portfolio",
    description: `Explore my portfolio to discover my skills, projects, and passion for technology. Join me in creating the future of innovation.`,
    images: "https://anujjoshi.netlify.app/logo.png",
    creator: "@anujjoshi3105",
    site: "@anujjoshi3105",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
          <meta
            name="google-site-verification"
            content="a-tlC7lxqKDFcOSkl7QSrELzrggflM2cjPn8ishZQs8"
          />
        </head>
        <body
          className={`overflow-x-hidden ${poppins.className}`}
          suppressHydrationWarning>
          <DarkProvider attribute="class" defaultTheme="dark">
            <Navbar />
            <main className="lg:mx-[8rem] md:mx-[4rem] my-[3rem] sm:mx-[2rem] mx-6">
              {children}
            </main>
            <Footer />
            <Toaster />
          </DarkProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
