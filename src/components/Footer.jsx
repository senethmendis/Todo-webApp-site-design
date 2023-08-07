import React from "react";
import styles, { layout } from "../styles";
import { FooterLinks } from "../constance";
import { list } from "postcss";

const Footer = () => {
  return (
    <section id="#Contact" className={`${layout.section} ${styles.paragraph}  ${styles.paddingY} md:${styles.flexStart} flex flex-col lg:flex-row`}>
      <div className={`lg:w-[30%] flex  flex-col w-full mb-10 lg:mb-0`}>
        <h1 className={`text-7xl min-w-[200px]`} >Do it</h1>
        <p className={`${styles.paragraph} md:mt-5 text-justify md:text-left py-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          reprehenderit, praesentium repellendus cupiditate ullam at delectus
          nesciunt iste dolores est.
        </p>
      </div>
      <div className={`w-full lg:gap-20 grid md:grid-cols-2 lg:grid-cols-4 lg:${styles.paddingX} `}>
        {FooterLinks.map((link) => (
          <div key={link.title}>
            <h4 className="font-bold py-2 text-primary">{link.title}</h4>
            <ul>
              {link.lniks.map((subLinks) => (
                <li className="font-thin py-2">
                  {" "}
                  <a href={subLinks.Lnik}> {subLinks.name} </a>{" "}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
