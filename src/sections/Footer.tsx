import Link from 'next/link'
import { FaGithub, FaFacebook, FaLinkedin, FaTelegram, FaInstagram  } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className="py-2 text-center my-4 md:my-8 gap-4 flex flex-col items-center justify-center">
        <p className='flex gap-3 text-lg'>
            <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://github.com/Anujjoshi3105/" target="_blank"><FaGithub /></a>
            <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://www.linkedin.com/in/anujjoshi3105/" target="_blank"><FaLinkedin /></a>
            <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://x.com/anujjoshi3105" target="_blank"><FaXTwitter /></a>
            <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://t.me/anujjoshi3105/" target="_blank"><FaTelegram /></a>
            <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://www.instagram.com/anujjoshi3105/" target="_blank"><FaInstagram /></a>
        </p>
        <p className='text-sm'>© 2024 <Link className="link hover:text-theme" href="/">Anuj Joshi</Link>. All Rights Resereved.</p>
    </footer>
  )
}

export default Footer
