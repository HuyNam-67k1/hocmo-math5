"use client";

import MasterLayout from "@/components/templates/MasterLayput";
import Banner from "@/components/organisms/TestBank/PageBanner";
import Sidebar from "@/components/organisms/TestBank/Sidebar";
import MainHeader from "@/components/organisms/Layout/Header";
import Footer from "@/components/organisms/Layout/Footer";
import WrapperCommon from "@/components/molecules/Wrapper/WrapperCommon";
import ExamItemResults from "@/components/organisms/TestBank/ExamResultList";
function TestBankPage() {
  return (
    <>
      <MainHeader />
      <Banner />
      <WrapperCommon background="#fafafa">
        <div className="bg-[#fafafa] xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
          <div className="mb-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="hidden lg:block col-span-3">
                <Sidebar />
              </div>
              <div className="sm:col-span-12 lg:col-span-9">
                <ExamItemResults />
              </div>
            </div>
          </div>
        </div>
      </WrapperCommon>
      <WrapperCommon background="#eeeeee">
        <Footer />
      </WrapperCommon>
    </>
  );
}

TestBankPage.Layout = MasterLayout;

export default TestBankPage;
