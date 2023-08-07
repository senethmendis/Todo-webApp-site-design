import React, { useState } from "react";
import styles from "../styles";
import { Navlinks } from "../constance";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.flexCenter} flex justify-between py-5`}>
      <h1 className="text-3xl font-bold font-poppins">Do it</h1>
      <ul className="gap-8 max-h-[100px] hidden md:flex">
        {Navlinks.map((navitems) => (
          <li
            key={navitems.id}
            className="text-lg hover:border-b-2 border-primary"
          >
            {" "}
            <a href={navitems.navPath}> {navitems.tabName} </a>{" "}
          </li>
        ))}
      </ul>
      <p className={`${styles.paragraph} hidden md:flex`}>
        Have any Questions?{" "}
        <a href="#Contact" className="text-primary">
          Contact us
        </a>{" "}
      </p>

      <div
        className="md:hidden relative"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? <IoCloseSharp size={30} /> : <HiMenuAlt3 size={30} />}

        <div
          className={`${styles.flexCenter} ${
            toggle ? "flex" : "hidden"
          } flex flex-col bg-primary w-[200px] p-3 rounded-lg absolute top-16 -left-[150px]`}
        >
          <ul className={`flex-col justify-center`}>
            {Navlinks.map((navitems) => (
              <li
                key={navitems.id}
                className="text-lg hover:border-b-2 border-primary"
              >
                {" "}
                <a href={`#${navitems.navPath}`}> {navitems.tabName} </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
