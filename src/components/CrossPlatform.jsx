import React from "react";
import styles, { layout } from "../styles";
import {smartPhone} from '../assets'

const CrossPlatform = () => {
  return (
    <section className={`${layout.section} `}>
      <div className={`${styles.flexStart} flex  flex-col flex-1`}>
        <h1 className={`${styles.heading1} my-auto`}>
          {" "}
          Cross platform <br className="sm:block hidden" />
          Task planner Do it.
        </h1>

        <div className="w-full h-full  flex flex-col gap-6">
          <div className="border-left mt-5">
            <h3 className="text-3xl tracking-wide">
              You can finally plane <br /> your tasks without pain.
            </h3>
            <p className={`${styles.paragraph}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              eum voluptatibus recusandae ex aspernatur quis quia, nemo quasi
              possimus officia.
            </p>
          </div>
          <p className={`${styles.paragraph} border-left`}>
            Do not waste your time anymore
          </p>
          <p className={`${styles.paragraph} border-left`}>
            Be one Stop ahead
          </p>
        </div>
      </div>

      <div className={`${layout.sectionImg}`}>
    <img src={smartPhone} alt="" />
      </div>
    </section>
  );
};

export default CrossPlatform;
