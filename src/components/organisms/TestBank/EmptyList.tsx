import { ReactElement } from "react";

import clsx from "clsx";
import Image from "next/image";

function EmptyList({
  className,
  title = "Danh sách đang trống",
}: {
  className?: string;
  title?: string | ReactElement;
}) {
  return (
    <div className={clsx("w-full flex items-center flex-col", className)}>
      <Image
        src="/images/empty.png"
        alt="no-item-found"
        width={250}
        height={137}
      />
      <p className="text-[#9B9B9B] mt-6">{title}</p>
    </div>
  );
}

export default EmptyList;
