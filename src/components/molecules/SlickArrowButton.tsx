"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Icons, styled } from "marathon-design-system";

const IconSlickStyled = styled.div`
  box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.15);
  border-radius: 20px;
  width: 64px;
  height: 56px;
  padding: 20px 24px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #07385c;
    path {
      stroke: white;
    }
  }
  path {
    stroke: #07385c;
  }
`;

interface SlickArrowButtonProps {
  onClick?: () => void;
  className?: string;
}

export const SlickArrowButtonPrev = ({
  onClick,
  className,
}: PropsWithChildren<SlickArrowButtonProps>) => (
  <IconSlickStyled
    onClick={onClick}
    className={clsx(
      "btn-slick-arrow slick-arrow-prev cursor-pointer",
      className
    )}
  >
    <Icons.ChevronLeft />
  </IconSlickStyled>
);

export const SlickArrowButtonNext = ({
  onClick,
  className,
}: PropsWithChildren<SlickArrowButtonProps>) => (
  <IconSlickStyled
    onClick={onClick}
    className={clsx(
      "btn-slick-arrow slick-arrow-next cursor-pointer",
      className
    )}
  >
    <Icons.ChevronRight />
  </IconSlickStyled>
);
