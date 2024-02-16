"use client";

import { HTMLAttributes, PropsWithChildren } from "react";
import { styled } from "marathon-design-system";

const WrapperStyled = styled.div`
  position: relative;
  overflow: hidden;
`;

const MultiDotStyled = styled.div`
  width: 170px;
  height: 300px;
  background-image: url("/images/multi-dot-bg.svg");
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;
  position: absolute;
  @media (max-width: 1024px) {
    width: 90px;
    height: 115px;
  }
`;

const CircleStyled = styled.div`
  position: absolute;
  border: 2px solid #219b67;
  border-radius: 50%;
`;

type Sizes = "small" | "medium" | "large";

export interface Decorate {
  type: "dot" | "circle";
  size: Sizes;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

const CircleSizes: {
  [key in Sizes]: { width: number | string; height: number | string };
} = {
  small: { width: 26, height: 26 },
  medium: {
    width: 200,
    height: 200,
  },
  large: {
    width: 318,
    height: 318,
  },
};

interface DecorateComponentProps {
  decorate: Decorate;
  className?: string;
}

const DecorateComponent = ({
  decorate: { type, size, position },
  className,
}: DecorateComponentProps) => {
  if (type === "dot") {
    return (
      <MultiDotStyled
        style={{
          top: position.top,
          left: position.left,
          right: position.right,
          bottom: position.bottom,
        }}
        className={className}
      />
    );
  }

  if (type === "circle") {
    return (
      <CircleStyled
        style={{
          top: position.top,
          left: position.left,
          right: position.right,
          bottom: position.bottom,
          ...CircleSizes[size],
        }}
        className={className}
      />
    );
  }

  return null;
};

export const commonDecorates: { [key: string]: Decorate[] } = {
  decor1: [
    { type: "circle", size: "small", position: { top: "8%", right: "5%" } },
    {
      type: "circle",
      size: "medium",
      position: { bottom: "-8%", right: "30%" },
    },
    { type: "dot", size: "medium", position: { top: "-40%", left: "-5%" } },
    { type: "dot", size: "medium", position: { bottom: "-40%", right: "5%" } },
  ],
  decor2: [],
  decor3: [],
  decor4: [],
  decor5: [],
  decor6: [],
};

interface WrapperCommonProps {
  background?: string;
  decorates?: {
    desktop?: Decorate[];
    mobile?: Decorate[];
  };
}

const WrapperCommon = ({
  children,
  background = "unset",
  decorates = {
    desktop: [],
    mobile: [],
  },
  className,
}: PropsWithChildren<WrapperCommonProps> & HTMLAttributes<HTMLDivElement>) => (
  <WrapperStyled style={{ background }} className={className}>
    {(decorates.desktop ?? []).map((decorate: Decorate, index: number) => {
      return (
        <DecorateComponent
          key={`desktop-${index}`}
          decorate={decorate}
          className="hidden md:block"
        />
      );
    })}
    {(decorates.mobile ?? []).map((decorate: Decorate, index: number) => {
      return (
        <DecorateComponent
          key={`mobile-${index}`}
          decorate={decorate}
          className="block md:hidden"
        />
      );
    })}
    <div className="z-10 relative">{children}</div>
  </WrapperStyled>
);

export default WrapperCommon;
