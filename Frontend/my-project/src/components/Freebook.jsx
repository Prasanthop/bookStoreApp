import React from "react";
import list from "../assets/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const Freebook = () => {
  const filterData = list.filter((book) => book.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.
          </p>
        </div>

        <div className="mt-10">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Card key={item.id} item={item} className="" />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
