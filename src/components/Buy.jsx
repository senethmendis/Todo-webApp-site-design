import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import {buyImg} from '../assets'

const Buy = () => {
  return (
    <section className={`${layout.section} ${styles.paddingY}`}>
      <div className={`${styles.flexCenter} p-5 sm:p-0 flex flex-col md:flex-row  bg-secondery rounded-3xl border-2 border-gray-500`}>
        <img src={buyImg} alt="buy img" className="w-[50%] mb-5 md:mb-0" />
        <div>
          <h1 className={`${styles.heading1}`}>Use the trial version now</h1>
          <p className={`${styles.paragraph}`}>
            indicate your goods and we will <br /> help you achieve them.{" "}
          </p>
          <Button buttonText={"Free Trial"} />
        </div>
      </div>
    </section>
  );
};

export default Buy;
