"use client";

import WrapperCommon from "@/components/molecules/Wrapper/WrapperCommon";
import Footer from "@/components/organisms/Layout/Footer";
import Header from "@/components/organisms/Layout/Header";

const TermsAndConditionsPage = () => {
  return (
    <>
      <div className="xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
        <Header />
        <section className="my-20">
          <h1 className="lg:text-4xl text-2xl text-[#219B67] text-center mb-10">
            <strong>Điều khoản sử dụng</strong>
          </h1>

          <p className="text-xl">
            Thông qua việc truy cập vào Website Học Mở hoặc sử dụng bất kỳ phần
            nào trong các dịch vụ của chúng tôi, Người Dùng xác nhận chấp thuận
            các điều khoản được nêu trong Điều khoản dịch vụ này. Nếu Người Dùng
            không đồng ý với bất kỳ điều khoản nào trong số những điều khoản
            này, chúng tôi khuyên bạn nên rời khỏi Website Học Mở ngay lập tức
            và Học Mở sẽ không chịu bất kỳ trách nhiệm nào đối với quyền truy
            cập của Người Dùng.
          </p>

          <p className="text-xl mt-8">
            Trong điều khoản dịch vụ này thì những cụm từ diễn đạt sau đây có
            nghĩa như được nêu dưới đây:
          </p>
          <p className="text-xl ml-10 mt-2">
            - Nội Dung nghĩa là bao gồm tất cả nội dung trên Website Học Mở
          </p>
          <p className="text-xl ml-10 mt-2">
            - Thành Viên nghĩa là Người Dùng đã đăng ký tài khoản thành công
            trên Website Học Mở.
          </p>

          <p className="text-xl ml-10 mt-2">
            - Dịch Vụ Học Mở nghĩa là là bất kỳ dịch vụ nào được cung cấp bởi
            Học Mở.
          </p>

          <p className="text-xl ml-10 mt-2">
            - Người Dùng nghĩa là đề cập đến bất kỳ cá nhân hoặc tổ chức nào sử
            dụng bất kỳ khía cạnh nào của Website Học Mở.
          </p>
          <p className="text-xl ml-10 mt-2">
            - Học Mở nghĩa là Website giáo dục trực tuyến hỗ trợ ôn tập kiến
            thức toán học cho học sinh lớp 5
          </p>
        </section>
      </div>
      <WrapperCommon background="#eeeeee">
        <Footer />
      </WrapperCommon>
    </>
  );
};

export default TermsAndConditionsPage;
