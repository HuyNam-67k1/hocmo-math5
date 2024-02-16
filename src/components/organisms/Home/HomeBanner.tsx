"use client";

import React from "react";
import LearningMethod from "../About/LearningMethod";
import dynamic from "next/dynamic";
import WrapperCommon from "@/components/molecules/Wrapper/WrapperCommon";
import HomeWhyYourUs from "./HomeWhyYourUs";
import HomeTrial from "./HomeTrial";
import HomeLearnWithMRT from "./HomeLearnWithMRT";
import Footer from "../Layout/Footer";
import HomeBannerTop from "./HomeBannerTop";

const HomeBanner = () => {
  return (
    <React.Fragment>
      <WrapperCommon background="#DFF2FD">
        <HomeBannerTop />
        <WrapperCommon className="mt-[10px] md:mt-[30px]">
          <HomeWhyYourUs />
        </WrapperCommon>

        <WrapperCommon className="mt-[20px] md:mt-[60px]">
          <HomeTrial />
        </WrapperCommon>

        <WrapperCommon background="#fafafa">
          <LearningMethod />
        </WrapperCommon>

        <WrapperCommon>
          <HomeLearnWithMRT />
        </WrapperCommon>

        <WrapperCommon background="#eeeeee">
          <Footer />
        </WrapperCommon>
      </WrapperCommon>
    </React.Fragment>
  );
};

export default HomeBanner;
