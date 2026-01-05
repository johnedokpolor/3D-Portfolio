import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import BurgerMenu from "./BurgerMenu";
import { motion, AnimatePresence } from "framer-motion";
//
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="relative flex items-center justify-between px-3 py-5 md:px-20">
      <Link
        to="/"
        className="text-[25px]"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        John.
      </Link>
      <BurgerMenu toggle={toggle} setToggle={setToggle} />

      <div
        className={`
         items-center 0 justify-between hidden md:flex gap-10 px-4 my-1 text-xl  `}
      >
        {navLinks.map((link) => (
          <Link
            onClick={() => {
              setActive(link.title);
            }}
            className={` ${
              active === link.title ? "text-white" : "text-gray-400"
            } hover:text-white my-1`}
            key={link.id}
            to={`#${link.id}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{
              opacity: 0,
              y: -5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="absolute left-0 w-screen duration-400 space-y-4 py-4 px-3 top-20 bg-gradient-to-r from-black to-gray-500"
          >
            {navLinks.map((link) => (
              <Link
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
                className={` ${
                  active === link.title ? "text-white" : "text-gray-200"
                } hover:text-white block `}
                key={link.id}
                to={`#${link.id}`}
              >
                {link.title}
              </Link>
            ))}
            <div className="w-full text-center py-2 px-3 rounded-lg bg-white text-black">
              Download Resume
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
