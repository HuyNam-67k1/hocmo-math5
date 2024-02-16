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

const Accordion = ({
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
      <div className="cursor-pointer" onClick={handleToggle}>
        {header}
      </div>
      <BodyStyled $isActive={isActive}>{body}</BodyStyled>
    </div>
  );
};

export default Accordion;
