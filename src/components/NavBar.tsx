import { uid } from "uid";
import { Button } from "./ui/Button";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const navBarMenu = [
  {
    id: uid(),
    title: "Home",
    path: "/",
  },
  {
    id: uid(),
    title: "Services",
    path: "#",
  },
  {
    id: uid(),
    title: "About Us",
    path: "#",
  },
  {
    id: uid(),
    title: "Our Team",
    path: "#",
  },
  {
    id: uid(),
    title: "Contact Us",
    path: "#",
  },
];

const NavBar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">The English Journey</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {navBarMenu.map((item) => (
              <li key={item.id}>
                <a
                  className="inline-block py-2 px-3 hover:text-secondary transition-colors duration-500 relative group"
                  href={item.path}
                >
                  <span className="block opacity-0 w-full h-1 bg-secondary absolute mt-4 left-1/2 -translate-x-1/2 top-1/2 -bottom-10 group-hover:opacity-100 transition-all duration-500 rounded-sm" />
                  {item.title}
                </a>
              </li>
            ))}
            <Button>Sign In</Button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}

        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};
export default NavBar;
