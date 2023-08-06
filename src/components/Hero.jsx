import React from "react";
import Button from "./Button";
import styles, { layout } from "../styles";
import { dashBoard } from "../assets";

const Hero = () => {
  return (
    <section className={`${layout.section} `}>
      <div
        className={`${styles.flexCenter} ${styles.paddingY} flex flex-col w-full `}
      >
        <h1
          className={`sm:text-7xl ${styles.heading1} py-4 text-center w-full`}
        >
          Plan your productive day <br className="sm:block hidden" /> better
          than the rest{" "}
        </h1>

        <Button buttonText={"Get Stared"} />
        <div className="w-full h-full mt-10 px-5 lg:px-0">
          <img
            src={dashBoard}
            alt=""
            className={`lg:max-w-[1280px] ${styles.paddingY} rounded-xl`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
