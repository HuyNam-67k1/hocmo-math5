import clsx from "clsx";
import { styled } from "marathon-design-system";
import { HTMLAttributes } from "react";

interface Props {
  width?: string;
  borderWidth?: string;
  color?: string;
  className?: string;
  type?: string;
}

const ArrowStyled = styled.i<{
  $width?: string;
  $borderWidth?: string;
  $color?: string;
}>`
  border: solid black;
  border-width: 0 ${(props) => props.$borderWidth || "1px"}
    ${(props) => props.$borderWidth || "1px"} 0;
  display: inline-block;
  padding: ${(props) => props.$width || "4px"};
  border-color: ${(props) => props.$color || "#424242"};

  &.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  &.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  &.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  &.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

export const Arrow = ({
  type,
  className,
  width,
  borderWidth,
  ...rest
}: Props & HTMLAttributes<HTMLElement>) => {
  return (
    <ArrowStyled
      {...rest}
      className={clsx(className, `${type || "right"}`)}
      $width={width}
      $borderWidth={borderWidth}
    />
  );
};
