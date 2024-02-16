import { ReactNode } from "react";
import { useState } from "react";
import clsx from "clsx";
import { styled } from "marathon-design-system";
import { Arrow } from "@/components/atoms/Arrow";

interface Props {
  title: ReactNode;
  content: ReactNode;
  titleClassName?: string;
  openByDefault?: boolean;
  className?: string;
}

const CollapsibleStyled = styled.div`
  .collapsible {
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  }

  .content {
    display: none;
    overflow: hidden;
  }
`;

export const Collapsible = (props: Props) => {
  const { title, content, titleClassName, openByDefault, className } = props;
  const [isOpen, setIsOpen] = useState(openByDefault || false);

  return (
    <CollapsibleStyled className={className}>
      <a
        className={clsx(
          "flex justify-between w-full items-center text-[#424242]",
          titleClassName,
          { "bg-[#F1FFF9] font-semibold !text-[#219B67]": isOpen }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <Arrow
          type={`${isOpen ? "up" : "down"}`}
          borderWidth="1px"
          color={`${isOpen ? "#219B67" : "#424242"}`}
          width="5px"
          className={clsx({ "mt-[-4px]": !isOpen }, { "mt-[4px]": isOpen })}
        />
      </a>
      <div className={clsx("content", { "!block rounded-b-[8px]": isOpen })}>
        {content}
      </div>
    </CollapsibleStyled>
  );
};
