"use client";

import { Icon } from "@/components/Icon";

function Point({
  item,
}: {
  item: {
    icon: Icon;
    title: string;
    details: string[];
  };
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <Icon type={item.icon} className="mr-4 w-10 h-10" size="xlarge" />
        <p className="text-[#07385C] text-2xl font-semibold">{item.title}</p>
      </div>
      <ul className="list-disc pl-12">
        {item.details.map((info) => (
          <li key={info}>{info}</li>
        ))}
      </ul>
    </div>
  );
}

function SellingPointBlock() {
  return (
    <div className="lg:pt-[40px] pt-6">
      <div className="xl:py-6 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
        <p className="lg:text-4xl text-2xl text-[#07375C] lg:mb-10 mb-6 lg:text-left text-center font-semibold">
          Điểm nổi bật của khóa học&nbsp;
          <span className="text-[#219B67]">Toán lớp 5 tại Học Mở</span>
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-0">
          <div>
            <Point
              item={{
                icon: "book",
                title: "Phương pháp học tập độc đáo",
                details: [
                  "Sử dụng công nghệ Online để khuyến khích việc tự học và tối ưu hoá thời gian",
                  "Mô hình cải tiến giúp đánh giá điểm mạnh và yếu để điều chỉnh việc học một cách hiệu quả",
                ],
              }}
            />
            <Point
              item={{
                icon: "copy",
                title: "Đề thi đa dạng giúp ôn tập hiệu quả",
                details: [
                  "Sau mỗi chương học học viên đều có thể làm các đề thi ôn tập lại kiến thức nhiều lần",
                  "Học viên có thể xem kết quả của mỗi lần làm bài qua biểu đồ một cách sinh động",
                ],
              }}
            />
          </div>
          <div>
            <Point
              item={{
                icon: "discount",
                title: "Nội dung kiến thức chất lượng và đầy đủ",
                details: [
                  "Video được Học Mở sưu tầm và chọn lọc một cách rất cẩn thận, đảm bảo về mặt kiến thức chính xác",
                  "Bài luyện tập với các câu hỏi cũng được chọn lọc chính xác và chuẩn",
                ],
              }}
            />
            <Point
              item={{
                icon: "listChecked",
                title: "Cam kết cải thiện kết quả học tập",
                details: [
                  "Tất cả kiến thức mà Học Mở cung cấp đều là thức tế, phù hợp với chương trình mà các nhà trường đang giảng dạy. Nên đảm bảo chính xác và hiệu quả",

                  "Chỉ cần bạn học hết các video, làm hết các bài luyện tập và để thi của Học Mở, đảm bảo bạn sẽ có kết quả thật tốt cho môn toán lớp 5",
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellingPointBlock;
