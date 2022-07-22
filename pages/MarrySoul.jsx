import Image from "next/image";
import React from "react";
import MarrySoulImg from "../public/projects/MarrySoulImg.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={MarrySoulImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MarrySoul</h2>
          <h3>React JS / Tailwind / Ethereum </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            <ul> #About</ul>
            MarrySoul is a permissionless soulbound token issuance/attestation protocol that enables people to bring relationships on-chain.
          </p>

          <p>
            <ul>#Future Plan </ul>
            We decided to take it further and launch it on mainnet and L2 with a better design and complete implementation, which
            <ul>
              <li>1-enables people to revoke their SBT;</li>
              <li> 2-enable people to search, issue, and attest with ENS integration;</li>
              <li> 3-link to various DID services like Proof of Humanity and brightID.</li>
            
            </ul>
            
           
           
            We believe a decentralized society will be formed from the grassroots, with the help and support of the individuals.

            Thank you!
          </p>
          <Link rel="stylesheet" href="https://marry-soul.vercel.app/" >
            <a target="_blank">
              <button className='px-8 py-2 mt-4 mr-8'>Website</button>
            </a>
          </Link>

          <Link rel="stylesheet" href="https://github.com/VISHAL-143x/MarrySoul" >
            <a target="_blank">
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </a>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Solidity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Hardhat
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ethereum
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Polygon
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-xl">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Twitch;
