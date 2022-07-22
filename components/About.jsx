import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="About" className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid:col-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] py-4 hover:underline ">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className=" py-2 text-gray-600">
            <span className=" space-x-0 text-2xl">

              ** I am not your normal Developer **
            </span>
          </p>
          <p className=" py-2 text-gray-600 text-xl">
            Hello.I&apos; m Vishal Pachpor and I am a first year undergrad persuing my Bachelor&apos;s.I love to code and I&apos; m super passionate about web development.
            In the Web-Dev part,  I&apos;ve command over JavaScript, ReactJs, NextJs and TailwindCSS parallely with it.
            I&apos;ve  experience in working with Web Apps like Next Js and React Js.
            
            
          </p>
          
          <p className=" py-2 text-gray-600 text-xl">
            And yeah, I&apos;m into Blockchain, Web3, Smart Contract development technologies which is a hot cake nowadays. Currenly exploring and learning about Ethereum, Solana Ecosystem and Solidity, Rust language for building smart contracts.
            As a Computer Applications student, I&apos;m super interested in learning coding languages, right now I&apos;m strengthening my Python Skills and learning new languages.
          </p>

          <p className=" py-2  hover:underline cursor-pointer text-[#6663cb] text-xl">
            <Link href="/#Projects">
              Check out some of my projects
            </Link>
          </p>
          <div className="w-full h-auto m-auto shadow-grya-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src="/../public/assets/BG1.png"
              alt="Random image"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
