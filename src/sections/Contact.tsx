import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Template from '@/components/Template'
import Button from '@/components/Button'

const Contact = () => {
  return (
    <Template title="Contact" subtitle="Feel free to contact" id="contact">
      <div className="md:flex md:flex-row-reverse lg:gap-10 md:gap-5">
        <div className="md:w-1/2 md:px-4 py-2 mt-5 mb-10">
          <h5 className="font-bold sm:text-xl text-lg">Let&apos;s talk about everything!</h5>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
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
          <form method="post" className="mx-auto w-full max-w-[550px]" action="https://script.google.com/macros/s/AKfycbyp8KuRt9-Nmyr3iSy9NiqisSG6sDqUwS1q0rvQASzTTceLnnFSrhjTTule1KjyNQHF/exec" name="recruitment-form">
            <input type="text" name="Name" id="name" placeholder="Name" className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" required />
            <input type="email" name="Email" id="Email" placeholder="Email" className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" required />
            <input type="text" name="Subject" id="Subject" placeholder="Subject" className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" required />
            <textarea name="Message" id="Message" cols={30} rows={5} placeholder="Message" className="w-full rounded-md bg-secondary py-3 px-4 text-base font-medium outline-none border-b-2 border-secondary transition-all delay-150 focus:border-theme mb-5" required />
            <Button text="Contact Me" link="/" icon={FaPaperPlane} className="bg-theme hover:bg-tertiary text-tertiary hover:text-theme hover:border-2 hover:border-theme cursor-pointer" />
          </form>
        </div>
      </div>
    </Template>
  )
}

export default Contact
