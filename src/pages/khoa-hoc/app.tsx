"use client";

import React from "react";
import WrapperCommon from "@/components/molecules/Wrapper/WrapperCommon";
import Footer from "@/components/organisms/Layout/Footer";
import MainHeader from "@/components/organisms/Layout/Header";
import ListingBanner from "@/components/organisms/Curriculum/ListingBanner";
import CurriculumList from "@/components/organisms/Curriculum/CurriculumList";
import SellingPointBlock from "@/components/organisms/Home/SellingPointBlock";

const CoureList = () => {
  return (
    <React.Fragment>
      <MainHeader />

      <WrapperCommon background="#fafafa">
        <ListingBanner />
      </WrapperCommon>
      <WrapperCommon background="#DFF2FD">
        <CurriculumList />
      </WrapperCommon>

      <WrapperCommon>
        <SellingPointBlock />
      </WrapperCommon>

      <WrapperCommon background="#eeeeee">
        <Footer />
      </WrapperCommon>
    </React.Fragment>
  );
};

export default CoureList;
