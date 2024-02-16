"use client";

import React from "react";
import MainHeader from "@/components/organisms/Layout/Header";
import HomeBanner from "@/components/organisms/Home/HomeBanner";
import { MetaTag } from "@/components/templates/MetaTag";
import Script from "next/script";

function Welcome() {
  return (
    <>
      <Script id="initMathJax" strategy="afterInteractive">
        {`MathJax = {
            loader: {load: ['[tex]/mhchem']},
            tex: {
              inlineMath: [
                ["$", "$"],
                // ["\\(", "\\)"],
                // ["\\[", "\\]"],
              ],
              packages: {'[+]': ['mhchem']}
            },
          };`}
      </Script>
      <Script
        id="MathJax-script"
        strategy="afterInteractive"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      />
      <MetaTag />
      <MainHeader />
      <HomeBanner />
      <div id="tooltip-wrapper" />
    </>
  );
}

export default Welcome;
