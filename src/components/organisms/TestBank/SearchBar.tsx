"use client";

import SearchOutlineSvg from "@/components/Icon/searchOutline.svg";
import { Input } from "marathon-design-system";

function SearchBar() {
  return (
    <div className="mt-8 lg:ml-11 ">
      <form>
        <Input
          inputSize={"md"}
          placeholder="Tìm tên đề thi"
          className="w-full md:w-[500px]"
          leftIcon={<SearchOutlineSvg width={24} height={24} />}
          allowClear
          type="search"
          inputMode="search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
