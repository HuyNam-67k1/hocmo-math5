"use client";

import React from "react";
import { styled } from "marathon-design-system";
import CurvedLine from "@/components/atoms/curved-line";

const BannerStyled = styled.div`
  background-image: url(https://cdn.marathon.edu.vn/uploads/OCIYruS8X5hylQ1QMHEWERHNoZiUdpahvGvYv0KM.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DetailBanner = () => {
  return (
    <BannerStyled className="w-full h-[378px]">
      <div className="text-center lg:text-left xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
        <h1>
          <CurvedLine
            size="lg"
            color="#28A06D"
            className="uppercase font-semibold lg:text-6xl text-4xl lg:leading-[90px] leading-[45px] lg:mt-[80px] mt-[120px]  inline-block text-[#07385c] lg:max-w-[800px]"
          >
            Toán Học <span className="text-[#219B67]">Lớp 5</span>
          </CurvedLine>

          <p className="mt-6 text-2xl text-[#07385c] lg:max-w-[800px] min-h-[32px]"></p>
        </h1>
      </div>
    </BannerStyled>
  );
};

export default DetailBanner;
