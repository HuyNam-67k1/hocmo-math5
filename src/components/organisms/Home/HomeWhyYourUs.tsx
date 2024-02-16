"use client";

import React from "react";
import WhyYourUsCard from "@/components/molecules/Card/WhyYourUsCard";
import { whyyourus } from "@/utils/constans";

const HomeWhyYourUs = () => (
  <div className="xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
    <div className="grid grid-cols-12 gap-4">
      {whyyourus.map((us, index) => (
        <WhyYourUsCard className="mt-5 lg:mt-4" key={index} {...us} />
      ))}
    </div>
  </div>
);

export default HomeWhyYourUs;
