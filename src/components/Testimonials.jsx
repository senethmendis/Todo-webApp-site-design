import React from "react";
import styles, { layout } from "../styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Reviews } from "../constance";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonials = () => {
  const ReviewCard = ({ userImg, userName, status, review }) => (
    <div className={`bg-gray-900 rounded-lg py-4 px-3 mx-4`}>
      <p className={`${styles.paragraph} text-center`}>{review}</p>
      <div className="flex items-center mt-5">
        <img src={userImg} className="w-[50px] rounded-full m-2" alt="" />
        <div className="pl-2">
          <h2 className="font-bold">{userName}</h2>
          <p
            className="font-thin
          "
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="Viwers" className={`${layout.section} `}>
      <div className={`${styles.paddingY} flex flex-col w-full`}>
        <h1 className={`${styles.heading1} text-center`}>
          User <span className="text-primary">reviews</span> <br /> of our
          application{" "}
        </h1>
        <Carousel 
        responsive={responsive} 
        className={`${styles.paddingY}`}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        {Reviews.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </Carousel>
        
      </div>
    </section>
  );
};

export default Testimonials;
