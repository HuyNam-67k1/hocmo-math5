"use client";

import WrapperCommon from "@/components/molecules/Wrapper/WrapperCommon";
import CurriculumDetails from "@/components/organisms/Curriculum/CurriculumDetails";
import CurriculumDetailsPage from "@/components/organisms/Curriculum/CurriculumDetailsPage";
import WhyIeltsBlock from "@/components/organisms/Home/WhyIelts";
import Footer from "@/components/organisms/Layout/Footer";
import MainHeader from "@/components/organisms/Layout/Header";
import React from "react";

function CurriculumDetail() {
  return (
    <>
      <MainHeader />
      <WrapperCommon background="#DFF2FD">
        <CurriculumDetailsPage />
        <CurriculumDetails />
        <WhyIeltsBlock />
      </WrapperCommon>
      <WrapperCommon background="#eeeeee">
        <Footer />
      </WrapperCommon>
    </>
  );
}
export default CurriculumDetail;
