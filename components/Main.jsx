import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="py-4 text-gray-700">
          <p className="uppercase py-2 tracking-widest text-gray-600 text-xl">
            Build-Explore-Grow #web 3.0
          </p>
          <h1>
            Hi, I&apos;m
            <span className="text-[#5651e5]">  Vishal</span>{" "}
          </h1>
          <h1 className="py-2  text-[#5e5d8a]">
            <Typewriter
              onInit={(typerwriter) => {
                typerwriter
                  .typeString("A React Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("A WEB3 Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("#DeFi")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("#DAO's")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("#Crypto")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("#Web 3.0")
                  .start();
              }}
            />

          </h1>
          <p className="py-4 text-gray-600 mx-w-[70%] m-auto text-xl">
            I love applying responsive design principles and watching my web
            pages shrink into mobile screens and still look amazing. It&apos;s
            oddly satisfying. I think in a way I&apos;m kind of like those web
            pages; I&apos;m moldable, but I still keep my creative flair intact.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/Vishalpachpor">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaLinkedinIn />
              </div>
            </a>

            <a href="https://github.com/VishalPachpor">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaGithub />
              </div>
            </a>

            <a href="https://mail.google.com/mail/u/1/#inbox?compose=new">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <AiOutlineMail />
              </div>
            </a>

            <a href="https://twitter.com/0xVishalpatil">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Main;
