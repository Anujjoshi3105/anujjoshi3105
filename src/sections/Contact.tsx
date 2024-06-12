'use client';

import { FormEvent, useState, useRef } from 'react';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Template from '@/components/Template';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
        )
        .then(
          () => {
            toast.success('Message sent successfully!');
            // Optionally reset form fields
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
          },
          (error) => {
            toast.error('Failed to send message. Please try again later.');
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <Template title="Contact" subtitle="Feel free to contact" id="contact">
      <ToastContainer />
      <div className="md:flex md:flex-row-reverse lg:gap-10 md:gap-5">
        <div className="md:w-1/2 md:px-4 py-2 mt-5 mb-10">
          <h5 className="font-bold sm:text-xl text-lg">Let&apos;s talk about everything!</h5>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
          <div className="flex flex-col gap-8">
            <a href="tel:9811184995" className="group">
              <div className="font-semibold">Contact:</div>
              <div className="flex gap-2 items-center"><FaPhoneAlt className="text-theme" />+91 981-11X-XXXX</div>
            </a>
            <a href="mailto:anujjoshi3105@gmail.com">
              <div className="font-semibold">Email:</div>
              <div className="flex gap-2 items-center"><FaEnvelope className="text-theme" />anujjoshi3105@gmail.com</div>
            </a>
            <a href="#">
              <div className="font-semibold">Location:</div>
              <div className="flex gap-2 items-center"><FaMapMarkerAlt className="text-theme" />New Delhi, India</div>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 h-fit bg-tertiary rounded-md p-4 flex items-center justify-center py-10 -mx-5 sm:m-0">
          <form ref={form} onSubmit={onSubmit} method="post" className="mx-auto w-full max-w-[550px]">
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name" 
              className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" 
              required 
            />
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              name="email" 
              id="Email" 
              placeholder="Email" 
              className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" 
              required 
            />
            <input 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              type="text" 
              name="subject" 
              id="Subject" 
              placeholder="Subject" 
              className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" 
              required 
            />
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}  
              name="message" 
              id="Message" 
              cols={30} rows={5} 
              placeholder="Message" 
              className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" 
              required 
            />
            <button 
              type="submit"
              className="inline-flex text-sm sm:text-md md:text-lg text-center no-wrap relative items-center gap-2 px-4 py-2 focus:outline-none rounded-md transition-all delay-100 bg-theme hover:bg-tertiary text-tertiary hover:text-theme border-2 border-theme cursor-pointer">
              <FaPaperPlane /> Contact Me
            </button>
          </form>
        </div>
      </div>
    </Template>
  );
};

export default Contact;
