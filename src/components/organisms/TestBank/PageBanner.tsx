import Button from "@/components/atoms/button";
import Image from "next/image";

function Banner() {
  return (
    <>
      <div className="relative h-[227px] md-[h-144px] lg:h-[298px] bg-gradient-to-b from-[#ECF6FD] to-[#fafafa] overflow-hidden">
        <Image
          width={363}
          height={298}
          src={"/images/test-bank-decor-left-desktop.png"}
          alt="decor left"
          className="hidden md:block absolute top-0 bottom-0 md:left-[-50px] lg:left-0 h-[100%]"
        />
        <Image
          width={363}
          height={298}
          src={"/images/test-bank-decor-right-desktop.png"}
          alt="decor right"
          className="hidden md:block absolute top-0 bottom-0 md:right-[-50px] lg:right-0 h-[100%]"
        />
        <Image
          width={121}
          height={227}
          src={"/images/test-bank-decor-left-mobile.png"}
          alt="decor left mobile"
          className="block md:hidden absolute top-0 bottom-0 left-0 h-[100%]"
        />
        <Image
          width={121}
          height={227}
          src={"/images/test-bank-decor-right-mobile.png"}
          alt="decor right mobile"
          className="block md:hidden absolute top-0 bottom-0 right-0 h-[100%]"
        />
        <div className="absolute inset-0 text-center pt-8 lg:pt-16 content-center justify-center">
          <h1 className="text-[#07375C] text-4xl lg:text-[48px]">Luyện đề</h1>
          <div className="flex justify-center mt-12">
            <Button buttonType="outline">
              <span className="text-[#000] text-[20px]">Môn Toán</span>&nbsp;
              <span className="text-[20px]">Lớp 5</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
