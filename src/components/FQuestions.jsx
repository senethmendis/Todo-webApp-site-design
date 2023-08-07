import React from "react";
import styles, { layout } from "../styles";
import FQACard from "./FQACard";
import { FQA } from "../constance";

const FQuestions = () => {
  return (
    <section className={`${layout.section} relative`} >
      <div className={`${styles.flexCenter} flex flex-col w-full text-center`}>
        <h1 className={` ${styles.heading1} `}> <span className="text-primary">FAQ</span> </h1>
        <p className={`${styles.paragraph} `}>The most popular questions</p>

        <div
          className={`w-full gap-2 flex-col flex h-full ${styles.paddingY} ${styles.flexCenter} `}
        >
          {FQA.map((cards) => (
            <FQACard
              key={cards.id}
             {...cards}
            />
          ))}
        </div>
      </div>
      <div className="w-[50%] h-[60%] pink__gradient absolute -z-10" />
    </section>
  );
};

export default FQuestions;
