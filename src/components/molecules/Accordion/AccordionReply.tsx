"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { styled } from "marathon-design-system";

type TAccordionProps = {
  header: any;
  body: any;
  initActive?: boolean;
  className?: string;
  onToggle?: (stt: boolean) => void;
};

const BodyStyled = styled.section<{ $isActive: boolean }>`
  max-height: ${(props) => (props.$isActive ? "auto" : "0")};
  overflow: hidden;
  transition: max-height 0.3s;
`;

const Dropdowns = ({
  header,
  body,
  initActive = false,
  className,
  onToggle = () => null,
}: TAccordionProps) => {
  const [isActive, setIsActive] = useState(initActive);

  const handleToggle = () => {
    const stt = !isActive;
    onToggle(stt);
    setIsActive(stt);
  };

  const sttClassName = isActive ? "active" : "inactive";
  return (
    <div className={clsx(sttClassName, className)}>
      <div className="flex">
        <BodyStyled $isActive={isActive}>{body}</BodyStyled>
        <div className="cursor-pointer flex" onClick={handleToggle}>
          {header}
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
