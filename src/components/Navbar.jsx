import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoLogoGithub, IoMenu } from "react-icons/io5";



// import { close, logo, menu } from "../assets";
// import { navLinks } from "../constants";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  // const [toggle, setToggle] = useState(false);

  return (
    // <nav className="w-full flex py-6 justify-between items-center navbar">
    //   <header className="Header_header__3Z-q0 content-container">
    //     <nav className="Header_nav__CuhH1 Header_navBg__1cFst">
    //       <ul className="Header_menu__2dtDj">
    //         <li className="Header_logo__2UB2g">
    //           <a href="/">
    //             <picture>
    //               {/* later for different logo size */}
    //               {/* <source
    //                 type="image/webp"
    //                 srcSet="data:image/png;base64,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"
    //                 media="(max-width: 64px)"
    //               />
    //               <source
    //                 type="image/png"
    //                 srcSet="/_next/static/chunks/images/spline_logo-c068feca0f6ae756affe68498147df78.png"
    //                 media="(max-width: 64px)"
    //               /> */}
    //               <img
    //                 src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/large-green-circle_1f7e2.png"
    //                 alt="site logo"
    //                 width={64}
    //                 height={64}
    //               />
    //             </picture>
    //           </a>
    //         </li>
    //         <li className="Header_linksWrapper__2zmfG">
    //           <ul className="Header_links__2PALW">
    //             <li>
    //               <a href="/#home">Home</a>
    //             </li>
    //             <li>
    //               <a href="/#features">Portfolio</a>
    //             </li>
                
    //             <li>
    //               <a href="/#product">About Me</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <ul className="Header_buttons__3Nklf">
    //             <li>
    //               <a href="#download" className="Header_cta__2Aw9A">
    //                 Github
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="Header_cta__2Aw9A Header_ctaOpenapp__3J91X"
    //                 href="/#clients"
    //               >
    //                 Contact
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="Header_dropdownWrapper__2DAWt">
    //           <button
    //             type="button"
    //             id="radix-0"
    //             aria-haspopup="menu"
    //             data-state="closed"
    //             className="Header_dropdownTrigger__3osaK"
    //           >
    //             <svg
    //               viewBox="0 0 16 16"
    //               fill="none"
    //               id="hamburger"
    //               width={16}
    //               height={16}
    //               aria-label="Open nav menu"
    //             >
    //               <path
    //                 d="M1.5 7.5H14.5M1.5 2.5H14.5M1.5 12.5H14.5"
    //                 stroke="white"
    //                 strokeLinecap="round"
    //               />
    //             </svg>
    //           </button>
    //         </li>
    //       </ul>
    //     </nav>
    //   </header>
      
    //   {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    //     {navLinks.map((nav, index) => (
    //       <li
    //         key={nav.id}
    //         className={`font-poppins font-normal cursor-pointer text-[16px] ${
    //           active === nav.title ? "text-white" : "text-dimWhite"
    //         } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
    //         onClick={() => setActive(nav.title)}
    //       >
    //         <a href={`#${nav.id}`}>{nav.title}</a>
    //       </li>
    //     ))}
    //   </ul> */}

    //   <div className="sm:hidden flex flex-1 justify-end items-center">
    //     <img
    //       src={toggle ? close : menu}
    //       alt="menu"
    //       className="w-[28px] h-[28px] object-contain"
    //       onClick={() => setToggle(!toggle)}
    //     />

    //     <div
    //       className={`${
    //         !toggle ? "hidden" : "flex"
    //       } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
    //     >
    //       <ul className="list-none flex justify-end items-start flex-1 flex-col">
    //         {navLinks.map((nav, index) => (
    //           <li
    //             key={nav.id}
    //             className={`font-poppins font-medium cursor-pointer text-[16px] ${
    //               active === nav.title ? "text-white" : "text-dimWhite"
    //             } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
    //             onClick={() => setActive(nav.title)}
    //           >
    //             <a href={`#${nav.id}`}>{nav.title}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <AnimatePresence initial={false}>
    <div className="flex w-screen flex-col items-center justify-center relative bg-primary ">
      <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
        <div className=" w-full md:w-880 bg-navBar p-3 rounded-2xl flex items-center">
          <p className="text-lg logo text-slate-200 font-bold">Naresh J</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a
              href="#home"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            >
              Home
            </a>
            <a
              href="/#features"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            >
              About
            </a>
            <a
              href="/#product"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            >
              Projects
            </a>
            
            
            <a href="#contact" className="ml-auto nav-button">
               Github
            </a>
            <a
              className="Header_cta__2Aw9A nav-button-1"
              href="/#clients"
            >
              Contact
            </a>
          </div>

          <motion.div
            whileTap={{ scale: 0.6 }}
            className="block md:hidden  ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className="text-2xl text-textBase " />
          </motion.div>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: "0.1s", type: "spring" }}
              style={{backdropFilter:"blur(20px)"}}
              className="p-4 w-275 bg-navBar-mb rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
            >
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Home
              </a>
              <div className="divider-white"></div>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                About
              </a>
              <div className="divider-white"></div>

              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Projects
              </a>
              <div className="divider-white"></div>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>
              <div className="divider-white"></div>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Download
              </a>
              
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  </AnimatePresence>
    
  );
};

export default Navbar;
