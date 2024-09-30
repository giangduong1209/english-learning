import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The English Journey</h1>
            <p className="text-dark2">
              TEJ is a platform dedicated to empowering aspiring English
              language. From beginer to advanced courses, we provide a
              comprehensive learning.
            </p>
          </div>
          {/* Second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Listening courses
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Speaking courses
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Reading courses
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Writing courses
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <Button className="rounded-e-xl py-4">Go</Button>
            </div>
            {/* Social icons */}
            <div className="flex space-x-6 py-3">
              <a href="">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="">
                <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
