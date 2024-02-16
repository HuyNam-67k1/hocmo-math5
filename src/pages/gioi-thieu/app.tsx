"use client";
import React from "react";
import { Container } from "marathon-design-system";
import Image from "src/components/atoms/Image";
import { StyledHeading2 } from "src/components/atoms/Typo";
import WrapperCommon from "src/components/molecules/Wrapper/WrapperCommon";
import Header from "@/components/organisms/Layout/Header";
import Footer from "@/components/organisms/Layout/Footer";
import SimpleCollapse from "@/components/molecules/SimpleCollapse";

function BannerBlock() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/images/about-banner.png"
          fallback="/images/marathon-default.png"
          alt="about-marathon"
          ratio={0.2716}
        />
      </div>
    </>
  );
}

function MainContentBlock() {
  return (
    <Container className="py-10">
      <StyledHeading2>Giới thiệu về Học Mở!</StyledHeading2>
      <p className="text-xl">
        Học Mở là website học tập trực tuyến hỗ trợ ôn tập kiến thức toán học
        dành riêng cho học sinh lớp 5. Chương trình học được giảng dạy gián tiếp
        thông qua video, được ghi lại bởi các thầy cô dạy giỏi. Nội dung kiến
        thức luôn được bám sát theo chương trình Toán lớp 5 của Bộ giáo dục và
        đào tạo.
      </p>

      <StyledHeading2>Câu chuyện và sứ mệnh của Học Mở!</StyledHeading2>
      <p className="text-xl">
        Với sự xuất hiện của đại dịch Covid-19, việc học online đang dần trở nên
        quen thuộc và được nhiều bậc phụ huynh lựa chọn thay thế cho cách học
        truyền thống trên lớp để đảm bảo an toàn cho các em. Tuy nhiên, hiện
        thực là vẫn đang có quá nhiều bất cập trong việc tổ chức lớp, công nghệ
        hỗ trợ học sinh, cũng như thầy cô trên các lớp học online để đảm bảo đạt
        hiệu quả như học offline.
      </p>
      <br />
      <p className="text-xl">
        Bên cạnh đó với cách biệt địa lý, các học sinh hiện nay trên cả nước gần
        như rất khó để tiếp cận được với các giáo viên hàng đầu trong từng lĩnh
        vực để nâng cao kết quả và chất lượng học tập như ý muốn.
      </p>

      <StyledHeading2>Tầm nhìn Học Mở!</StyledHeading2>
      <p className="text-xl">
        Trở thành nền tảng giáo dục công nghệ hàng đầu Việt Nam, cung cấp giải
        pháp giáo dục toàn diện ngoài trường học cho tất cả học sinh trên cả
        nước với chất lượng tốt nhất.
      </p>
    </Container>
  );
}

const faqItems = [
  {
    title: "Hiện Học Mở đang có chương trình giảng dạy những môn học nào?",
    content:
      "Hiện tại Học Mở đang chỉ tập trung cho 1 bộ môn chính là Toán của khối lớp 5. Trong tương lai Học Mở sẽ mở rộng ra thêm nhiều khối lớp và nhiều môn. Bạn nhớ theo dõi thông tin tại Website để được cập nhật sớm nhất nhé.",
  },
  {
    title: "Cách mà Học Mở triển khai khoá học như thế nào?",
    content:
      "Hiện tại chương trình học của Học Mở luôn bám sát chương trình của Bộ giáo dục. Học viên sẽ học qua hình thức xem video, xem nội dung bài học dưới dạng văn bản, sau đó làm bài luyện tập và có thể để lại bình luận cho bài học. Để kiểm tra kiến thức học viên có thể làm các đề thi có sẵn nhiều lần và có thống kê phân tích kết quả sau mỗi lần làm bài thi.",
  },
  {
    title: "Học viên có thể học như thế nào?",
    content:
      "Để học được các bài học của Học Mở, học viên cần phải đăng ký vào hệ thống. Sau đó, học viên chỉ cần bấm vào Mở ra học và học thôi!!",
  },
  {
    title: "Học viên có cần chuẩn bị gì để đăng ký khoá học không?",
    content:
      "Đến với Học Mở thì bạn sẽ không cần chuẩn bị gì nhiều đâu, bạn chỉ cần có máy tính kết nối mạng và học thôi. Tất cả những gì còn lại về kiến thức Học Mở sẽ cung cấp hết cho bạn.",
  },
  {
    title: "Sau khi học xong khoá học, học viên sẽ được những gì?",
    content:
      "Bạn sẽ được cung cấp tất cả các kiến thức của chương trình toán lớp 5, đảm bảo kết quả học tập môn toán tại trường sẽ được nâng cao.",
  },
  {
    title: "Phụ huynh có nên lựa chọn Học Mở cho con mình không?",
    content:
      "Tức nhiên là có rồi, với những gì Học Mở đã cung cấp, đãm bảo sẽ là một nơi rất an tâm để cho các bậc phụ huynh lựa chọn để con em mình được trang bị thêm nhiều kiến thức và cải thiện kết quả học tập.",
  },
];

function FaqBlock() {
  return (
    <WrapperCommon background="#fafafa">
      <Container className="text-center py-[60px]">
        <h2 className="lg:text-[48px] text-2xl text-[#07385C] font-semibold leading-[68px]">
          Giải đáp thắc mắc
        </h2>

        <SimpleCollapse
          items={faqItems}
          className="max-w-[650px] mx-auto !text-xl"
        />
      </Container>
    </WrapperCommon>
  );
}

function AboutPage() {
  return (
    <div>
      <Header />
      <BannerBlock />
      <MainContentBlock />
      <FaqBlock />
      <WrapperCommon background="#eeeeee">
        <Footer />
      </WrapperCommon>
    </div>
  );
}

export default AboutPage;
