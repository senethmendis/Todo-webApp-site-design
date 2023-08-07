import React from "react";
import styles, { layout } from "../styles";
import { smartPhone, googlePlay, appleStore } from "../assets";
import Button from "./Button";

const CrossPlatform = () => {
  return (
    <section id="About" className={`${layout.section} `}>
      <div className={`${styles.flexStart} flex  flex-col flex-1`}>
        <h1 className={`${styles.heading1}`}>
          {" "}
          Cross platform <br className="sm:block hidden" />
          Task planner Do it.
        </h1>

        <div className="border-left mt-5">
          <h3 className="text-3xl tracking-wide">
            You can finally plane <br /> your tasks without pain.
          </h3>
          <p
            className={`py-4 font-normal tracking-wider text-justify md:text-left`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum
            voluptatibus recusandae ex aspernatur quis quia, nemo quasi possimus
            officia.
          </p>
        </div>
        <p className={`${styles.paragraph} border-left`}>
          Do not waste your time anymore
        </p>
        <p className={`${styles.paragraph} border-left`}>Be one Stop ahead</p>
        <Button buttonText={"Get Started"}  />
        <div className="w-full flex justify-center sm:justify-start gap-6 mt-5">
          <img
            src={googlePlay}
            alt=""
            className=" w-[200px] h-[65px] aspect-auto"
          />
          <img
            src={appleStore}
            alt=""
            className=" w-[200px] h-[65px] aspect-auto"
          />
        </div>
      </div>

      <div className={`${layout.sectionImg} relative pt-20 md:pt-0`}>
        <div className="w-[30%] h-[30%] top-0 right-0 black-gradient mx-auto backdrop-blur-lg absolute z-30  border-2 border-gray-700  rounded-xl  object-contain" />

        <img
          src={smartPhone}
          alt=""
          className="my-auto relative bottom-[100px] z-20"
        />
        <div className="w-[50%] h-[70%] black-gradient mx-auto backdrop-blur-lg absolute z-10  border-2 border-gray-700  rounded-xl  object-contain" />
        <div
          className={`pink__gradient w-[50%] h-[50%] right-0 top-0 absolute z-10`}
        />
        <div
          className={`purple__gradient w-[50%] h-[40%] right-0 absolute z-0`}
        />
      </div>
    </section>
  );
};

export default CrossPlatform;
