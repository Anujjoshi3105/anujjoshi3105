import Image from "next/image";
import Link from "next/link";
import { FaCode, FaCertificate } from "react-icons/fa";
import Template from "@/components/Template";
import Perk from "@/components/Perk"

function About() {

  return (
    <Template title={"About Me"} subtitle={"My Introduction"} id={"about"}>
      <div>
        <div className="mb-5 justify-center items-center flex-col lg:grid lg:grid-cols-5 lg:gap-10 contain-layout about-grid">
          <div className="relative w-max h-max group lg:col-span-2 group mb-10">
            <div className="absolute bg-theme group-hover:-translate-x-1 group-hover:-translate-y-1 left-4 top-4 h-[225px] w-[225px] sm:h-[400px] sm:w-[400px] lg:w-[360px] lg:h-[360px] rounded-md transition-all delay-150"></div>
            <div className="h-[225px] w-[225px] sm:h-[400px] sm:w-[400px] lg:w-[360px] lg:h-[360px] object-cover">
              <Image src="/me.jpg" alt="profile" className="rounded-md" fill />
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] lg:col-span-3 ">
            <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
              Hello! My name is Anuj Joshi, and I am a passionate software engineer
              with a keen interest in Web Development and Machine Learning. 
            </p>
            <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
              At <Link href="https://limstir-dtu.vercel.app" className="link text-theme" target="_blank">
              LIMSTIR-DTU</Link> and as a member of the Robotic Society at <Link href="https://srdtu-revamp.vercel.app" className="link text-theme" target="_blank">
              SR-DTU</Link>, I strive to craft sustainable solutions for global challenges.
            </p>
            <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
              Additionally, I share my knowledge and passion with the world
              through my <Link href="https://devDiaries.revamp.vercel.app" className="link text-theme" target="_blank">
              blogs</Link>, where I demonstrate how to build
              full-stack applications.
            </p>
            <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
              Currently, I&apos;m leading a project called <Link
                className="link text-theme"
                target="_blank"
                href="https://frontendvita.com"
              >
              Story Smith</Link>, an LLM model aimed at 
              crafting stories with images. Join me in this exciting endeavor to contribute
              to cutting-edge storytelling technology!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap max-w-7xl mx-auto">
          <Perk title="10+ Projects Completed" icon={FaCode} />
          <Perk title="2+ Years Experience" icon={FaCertificate} />
        </div>
      </div>
    </Template>
  );
}

export default About;
