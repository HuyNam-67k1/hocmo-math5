import { MouseEvent, ReactHTML } from "react";

import clsx from "clsx";
import styled from "styled-components";

import { IconComponents } from "./type";

type IconWrapperProps = {
  $iconColor: string | null;
};

const colorIcon = (color: string | null) => {
  if (!color) {
    return "";
  }
  return `
  [data-custo=fill] [fill],
  [data-custo=both] [fill] {
    fill: ${color};
  }
  [data-custo=stroke] [stroke],
  [data-custo=both] [stroke] {
    stroke: ${color};
  }`;
};

export const StyledIconWrapper = styled.span<IconWrapperProps>`
  ${(props) => colorIcon(props.$iconColor)}
`;

export type IconDimensions = {
  width: number | string;
  height: number | string;
};

export type IconSize =
  | "xlarge"
  | "large"
  | "default"
  | "medium"
  | "small"
  | "xsmall"
  | "xxsmall"
  | "xxxsmall";

export type IconProps = {
  type: Icon;
  svgProps?: React.SVGProps<SVGSVGElement>;
  size?: IconSize | IconDimensions | number;
  height?: number;
  color?: string | null;
  className?: string;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (evt: MouseEvent<HTMLButtonElement>) => void;
  onTouchEnd?: (evt: any) => void;
  as?: keyof ReactHTML;
};

const sizeByName: { [k in IconSize]: number } = {
  xlarge: 40,
  large: 32,
  default: 24,
  medium: 20,
  small: 18,
  xsmall: 16,
  xxsmall: 14,
  xxxsmall: 8,
};

export const Icon = ({
  type,
  svgProps,
  size = "default",
  color = "",
  height,
  className,
  onClick,
  onMouseOver,
  onTouchEnd,
  as,
}: IconProps) => {
  const SvgComponent = IconComponents[type];

  if (!SvgComponent) {
    return null;
  }

  const dimensions: IconDimensions =
    typeof size === "object"
      ? size
      : {
          width: typeof size === "number" ? size : sizeByName[size],
          height: typeof size === "number" ? height || size : sizeByName[size],
        };

  return (
    <StyledIconWrapper
      className={clsx("icon-wrapper", className)}
      $iconColor={color}
      onMouseOver={onMouseOver}
      onTouchEnd={onTouchEnd}
      onClick={onClick}
      as={as}
    >
      <SvgComponent
        width={dimensions.width}
        height={dimensions.height}
        {...svgProps}
      />
    </StyledIconWrapper>
  );
};

export default Icon;
