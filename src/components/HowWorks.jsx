import React from "react";
import styles, { layout } from "../styles";
import { smartWatch } from "../assets";
import Button from "./Button";

const textItems = [
  { id: 1, pras: "Download application" },
  { id: 2, pras: "Create an account" },
  { id: 3, pras: "Use it and start planning your day" },
];

const HowWorks = () => {
  const NumberCard = ({ number, subtext }) => (
    <div className="flex gap-6 items-center py-5 ">
      <h1
        className={`${styles.flexCenter} number-3dicon `}
      >
        {number}
      </h1>
      <p className={`${styles.paragraph}`}>{subtext}</p>
    </div>
  );

  return (
    <section id="HowTo" className={`${layout.section}`}>
      <div className={`flex-1 md:flex items-center relative hidden `}>
        <img
          src={smartWatch}
          alt=""
          className={`rotate-45 top-0 w-[50%] z-[20] -left-[30px] absolute object-contain md:rotate-0 duration-100 ease-in-out`}
        />

        <img
          src={smartWatch}
          alt=""
          className={`w-[50%] z-[20] absolute -rotate-[20deg] bottom-0 object-contain left-0 md:left-36 md:rotate-0 duration-100 ease-in-out`}
        />
        <div className="w-[50%] h-[70%]  border-2 border-secondery backdrop-blur-lg rounded-xl absolute z-10" />
        <div className="w-[40%] h-[30%] bottom-0 absolute top-0 left-0 z-0 blue__gradient" />
      </div>

      <div className={`flex-1`}>
        <h1 className={`${styles.heading1}`}>
          How does it <span className={`text-primary`}>works</span>?
        </h1>
        <p>
          3 simple step's and you will start make <br /> your life better.
        </p>

        <div>
          {textItems.map((items) => (
            <NumberCard key={items.id} number={items.id} subtext={items.pras} />
          ))}

          <Button buttonText={"Get Started"} />
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
