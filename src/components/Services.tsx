import { motion } from "framer-motion";
import { BiSupport, BiWorld } from "react-icons/bi";
import { FaEarListen } from "react-icons/fa6";
import { FcReadingEbook } from "react-icons/fc";
import { RiSpeakFill } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { uid } from "uid";

const ServicesData = [
  {
    id: uid(),
    title: "Listening Course",
    link: "#",
    icon: <FaEarListen />,
    delay: 0.2,
  },
  {
    id: uid(),
    title: "Reading Course",
    link: "#",
    icon: <FcReadingEbook />,
    delay: 0.4,
  },
  {
    id: uid(),
    title: "Speaking Course",
    link: "#",
    icon: <RiSpeakFill />,
    delay: 0.6,
  },
  {
    id: uid(),
    title: "Writting Course",
    link: "#",
    icon: <TfiWrite />,
    delay: 0.8,
  },
  {
    id: uid(),
    title: "International Exams",
    link: "#",
    icon: <BiWorld />,
    delay: 1,
  },
  {
    id: uid(),
    title: "24/7 Support",
    link: "#",
    icon: <BiSupport />,
    delay: 1.2,
  },
];

const SlideLeft = (delay: number) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      trasition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <div className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl gap-4 flex flex-col items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
