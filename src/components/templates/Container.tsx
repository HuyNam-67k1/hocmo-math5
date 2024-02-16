import React from "react";
export interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  id?: string;
}

export const ELearningContainer = ({
  children,
  className = "",
  id,
}: React.PropsWithChildren<ContainerProps>) => (
  <section
    className={`lg:p-[24px] bg-[#F9F9F9] rounded-tl-[24px] ${className}`}
    id={id}
  >
    {children}
  </section>
);
