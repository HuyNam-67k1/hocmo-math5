import MainHeader from "@/components/organisms/Layout/Header";
import Footer from "@/components/organisms/Layout/Footer";
import WrapperCommon from "../molecules/Wrapper/WrapperCommon";

export const MasterLayout = () => {
  return (
    <div className="bg-[#fafafa]">
      <MainHeader />
      <WrapperCommon className="bg-[#e5e7eb]">
        <Footer />
      </WrapperCommon>
    </div>
  );
};
