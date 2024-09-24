import React from "react";
import list from "../assets/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            accusamus libero ut, magni quod facilis quo! Dolor omnis aperiam
            enim, fugiat sequi id et maxime ex numquam maiores natus ab!
            Corporis, doloremque modi ducimus quia suscipit sed, quas expedita
            aliquid aliquam cum vel doloribus accusamus voluptates harum,
            consequuntur blanditiis dignissimos beatae. Reprehenderit eius odit
            temporibus? Labore quia architecto explicabo adipisci magni deserunt
            aliquam mollitia, velit autem ex perspiciatis id consectetur cum
            saepe voluptas quos exercitationem! Id repellat voluptatibus impedit
            est suscipit ullam quam possimus explicabo quibusdam quidem.
            Exercitationem aperiam ad tempore voluptas aspernatur voluptatibus,
            autem excepturi debitis animi tempora quo!
          </p>
          <Link to={"/"}>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 duration-300 mt-6 items-center">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Card key={item.id} item={item} className="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
