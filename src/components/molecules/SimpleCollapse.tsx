import { useCallback, useState } from "react";

import clsx from "clsx";

export interface CollapseItem {
  title: string;
  content: string;
}

function Collapse({ item }: { item: CollapseItem }) {
  const [isShow, setIsShow] = useState(false);

  const onClick = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <div className="text-left text-xl">
      <div
        onClick={onClick}
        className={clsx(
          "text-lg font-semibold flex items-center justify-start cursor-pointer mt-8",
          {
            "text-[#219B67]": isShow,
            "text-[#424242]": !isShow,
          }
        )}
      >
        <span className="block mr-4">{isShow ? "-" : "+"}</span>
        <span>{item.title}</span>
      </div>

      {isShow && (
        <div
          className="border-l border-[#219B67] pl-4 ml-4 mt-4 text-[#424242]"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      )}
    </div>
  );
}

interface SimpleCollapseProps {
  items: CollapseItem[];
  className?: string;
}
function SimpleCollapse({ items, className }: SimpleCollapseProps) {
  return (
    <div className={clsx(className)}>
      {items.map((item: CollapseItem, index: number) => {
        return <Collapse key={index} item={item} />;
      })}
    </div>
  );
}

export default SimpleCollapse;
