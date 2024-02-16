import { useEffect, useState } from "react";

import NextImage from "next/image";

function Image({
  src,
  fallback,
  alt,
  ratio,
  className,
  containerClassname,
}: {
  src: string;
  fallback: string;
  alt: string;
  ratio?: number;
  className?: string;
  containerClassname?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  if (ratio) {
    return (
      <span
        style={{
          width: "100%",
          paddingTop: `${ratio * 100}%`,
          position: "relative",
          display: "block",
        }}
        className={containerClassname}
      >
        <NextImage
          src={imgSrc ?? ""}
          alt={alt}
          className={className}
          fill
          sizes="100vw"
          onError={() => {
            setImgSrc(fallback);
          }}
        />
      </span>
    );
  }
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallback);
      }}
      className={className}
    />
  );
}

export default Image;
