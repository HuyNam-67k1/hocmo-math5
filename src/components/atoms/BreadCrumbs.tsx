import { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Arrow } from "@/components/atoms/Arrow";
export interface CrumbProps {
  name: string;
  url: string;
  node?: ReactNode;
  onClick?: () => void;
}

interface Props {
  crumbs: Array<CrumbProps>;
  crumItemClassName?: string;
  className?: string;
}

export const BreadCrumbs = (props: Props) => {
  const { crumbs, crumItemClassName, className } = props;
  return (
    <div
      className={clsx("flex text-[#9B9B9B] items-center !text-xl", className)}
    >
      {crumbs.map((crumb, index, arr) => {
        if (arr.length - 1 === index) {
          return (
            <span
              key={`crumbs-${index}`}
              className={clsx(
                "font-semibold text-[#424242] line-clamp-1 max-w-[180px]",
                crumItemClassName
              )}
              title={crumb.name}
            >
              {crumb.node || crumb.name}
            </span>
          );
        } else {
          return (
            <div key={`crumbs-${index}`} className="flex items-center">
              <Link
                href={crumb.url}
                title={crumb.name}
                onClick={crumb?.onClick}
              >
                {crumb.node || crumb.name}
              </Link>
              <Arrow className="md:mx-[12px] mx-[8px] !p-[3px] md:!p-[4px]" />
            </div>
          );
        }
      })}
    </div>
  );
};
