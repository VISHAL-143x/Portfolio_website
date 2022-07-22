import React from "react";
import VideshieldImg from "../public/assets/Vidshield.png"
import MarrySoulImg from "../public/projects/MarrySoulImg.png"
import Projectitem from "./Projectitem";

function Projects() {
  return (
    <div id="Projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl text-[#5156e5] tracking-widest uppercase">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve build</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <Projectitem
            title="Videshield"
            backgroundImage={VideshieldImg}
            projectUrl="/Vidshield"
            projectDetails="Blockchain"
          />

          <Projectitem
            title="MarrySoul"
            backgroundImage={MarrySoulImg}
            projectUrl="/MarrySoul"
            projectDetails="Blockchain"
          />

          {/* <Projectitem
            title="Crypto App"
            backgroundImage={CryptoImg}
            projectUrl="/Crypto"
            projectDetails="Next Js"
          /> */}

          {/* <Projectitem
            title="Twitch clone"
            backgroundImage={TwitchImg}
            projectUrl="/Twitch"
            projectDetails="Next Js"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
