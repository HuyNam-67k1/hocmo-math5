import clsx from "clsx";
import { PropsWithChildren } from "react";

const Dropdown = (
  props: PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    extraText?: string;
    isIcon?: boolean;
  }>
) => {
  const { children, extraText = "", className } = props;

  return (
    <div
      className={clsx(
        "flex justify-between bg-[#fafafa] items-center rounded-lg mt-2",
        className
      )}
    >
      <div
        className={`flex items-center text-[#817d7d] lg:text-base text-sm pr-1`}
      >
        {(props.isIcon ?? true) && (
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        )}
        {children}
      </div>
      <div className="text-[#9B9B9B] lg:text-lg text-md whitespace-nowrap ml-4">
        {extraText}
      </div>
    </div>
  );
};

export default Dropdown;
