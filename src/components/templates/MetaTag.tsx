import { default as React } from "react";

import Head from "next/head";

export const MetaTag = () => {
  return (
    <Head>
      <title>Học Mở</title>
      <meta itemProp="name" content={"Ôn Tập Toán Lớp 5"} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/public/favicon.ico" />
      <meta name="theme-color" content="#219b67" />
      <meta name="city" content="Ho Chi Minh" />
      <meta name="country" content="Viet Nam (VNM)" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:type" content="image/png,image/jpeg,image/gif" />
      <meta property="og:locale" content="vi_VN" />
      <meta
        name="facebook-domain-verification"
        content="3byc64pc7zz02qx566l8zh2y3s9ce0"
      />
      <meta
        name="google-site-verification"
        content="SW2ydT79QbgpSXQIden4yooMM3lhzzuyzeL9CKFxfeE"
      />
    </Head>
  );
};
