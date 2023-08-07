import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles";

const FQACard = ({ questionTitle, questionDetails }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={` w-full flex flex-col duration-300 ease-in-out items-center lg:max-w-[70%] min-h-[100px] text-left py-2 px-5 rounded-lg bg-gray-900 ${styles.flexStart}`}
    >
      <div className="w-full flex justify-between items-center">
        <h3 className={`text-xl font-bold py-2  `}>{questionTitle}</h3>
        <div
          className="flex m-2 hover:bg-white p-2 rounded-full duration-500"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? (
            <IoCloseSharp size={20} className="text-primary" />
          ) : (
            <AiOutlinePlus size={20} className="text-primary" />
          )}
        </div>
      </div>
      <p className={`${styles.paragraph} ${toggle ? "h-auto" : "hidden"}  `}>
        {questionDetails}
      </p>
    </div>
  );
};

export default FQACard;
