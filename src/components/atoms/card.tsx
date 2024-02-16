import React, { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

function Card({ children, className }: PropsWithChildren<CardProps>) {
  return (
    <div className={"p-6 bg-[#ffffff] rounded-lg shadow-lg"}>{children}</div>
  );
}

export default Card;
