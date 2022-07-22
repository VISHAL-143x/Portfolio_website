import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router"



function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShandow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937")
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === "/Property" ||
      router.asPath === "/Crypto" ||
      router.asPath === "/Netflix" ||
      router.asPath === "/Twitch"
    ) {
      setNavBg("transparent")
      setLinkColor("#ecf0f3")
    } else {
      setNavBg("#ecf0f3")
      setLinkColor("#1f2937")
    }

  }, [router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handeleShadow = () => {
      if (window.scrollY >= 90) {
        setShandow(true);
      } else {
        setShandow(false);
      }
    };
    window.addEventListener("scroll", handeleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      id="Navbar"
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image
            src="/../public/assets/Vip1.png"
            alt="/"
            height="85"
            width="100"
            className="cursor-pointer"
          />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex ">
            <Link href="/#home">
              <li className=" ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>

            <Link href="/#About">
              <li className=" ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>

            <Link href="/#skills">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>

            <Link href="/#Projects">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>

            <Link href="/#Contact">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70"
            : " "
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between ">
            <Link href="/">
              <Image
                src="/../public/assets/Vip1.png"
                alt=""
                height="45"
                width="80"
                className="cursor-pointer"
              />
            </Link>
            <div
              onClick={handleNav}
              className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className=" border-b border-gray-300 my-4">
            <p className="w-[80%] md:w-[90%] py-4 ">
              Lets build something to change the existing system
            </p>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>

              <Link href="/#About">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>

              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills{" "}
                </li>
              </Link>

              <Link href="/#Projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Project
                </li>
              </Link>

              <Link href="/#Contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#544ef4] ">
                Lets connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/vishal-patil-09ba61219/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedinIn />
                  </div>
                </a>

                <a href="https://github.com/VISHAL-143x">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaGithub />
                  </div>
                </a>

                <a href="https://mail.google.com/mail/u/1/#inbox?compose=new">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineMail />
                  </div>
                </a>

                <a href="https://twitter.com/vishalP01113336">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
