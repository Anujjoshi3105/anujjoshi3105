import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/ThemeContext";
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Anuj Joshi - Portfolio",
  description: `I'm Anuj Joshi, deeply passionate about continuous learning and personal growth. My journey spans various domains like web development, web3, and AI-ML, where I find endless curiosity and potential. Beyond academics, I thrive on project experiences and community engagement. Excited to apply my diverse skill set and passion for AI-ML in collaborative environments.`,
  keywords: "Anuj Joshi, CSE, DTU, Software, Engineer, SR-DTU, LIMSTIR-DTU, Machine Learning, Hire, Resume, Robotics, Society, Web, Development",
  authors: { name: "Anuj Joshi"}
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
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </head>
      <body className={`bg-background text-primary ${poppins.className}`}>
        {children}
      </body>
    </html>
    </ThemeProvider>
  );
}
