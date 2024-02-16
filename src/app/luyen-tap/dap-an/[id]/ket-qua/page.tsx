"use client";

import { Button, Divider } from "marathon-design-system";
import { ROUTES } from "src/utils/constans";
import { Icon } from "@/components/Icon";
import { useParams, useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Image from "next/image";
import { useGetHistoryById } from "@/components/organisms/API/exam/history/examHistoryApi";

const queryClient = new QueryClient();

function ExamResult() {
  const router = useRouter();
  const params = useParams();
  const examId = params?.id;

  const { data: dataResult } = useGetHistoryById(examId as any);
  localStorage.setItem("dataResult", JSON.stringify(dataResult));

  const data = dataResult?.data;

  return (
    <div className="h-[calc(100vh-60px)] pt-8 md:mt-[100px]">
      <div className="w-full md:max-w-[700px] mx-auto p-6 md:p-[16px] text-center bg-none md:bg-[url('/images/login-bg.png')] bg-cover aspect-[18/17]">
        <p className="text-3xl leading-[34px] text-[#07375C] font-semibold">
          Bạn đã hoàn thành bài thi!!
        </p>
        <div className="p-6 bg-white rounded-3xl shadow-sm border border-[#fbf8f8] text-center mt-4">
          <div className="flex justify-center items-center">
            <p className="text-[32px] lg:text-4xl leading-[44px] text-[#219b67] mr-2 font-semibold">
              {(data?.score || 0).toFixed(1) || ""}
            </p>
          </div>
          <p className="text-3xl text-[#A9A9A9] my-2 mb-4">Tổng điểm</p>

          <div>
            {data?.score >= 8 && data?.score <= 10 ? (
              <div className="justify-center items-center mt-6">
                <Image
                  src="/images/excellent-result.png"
                  alt="medal"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
                <p className="mt-2 text-xl text-[#abb2af] ">
                  Bạn thật xuất sắc!
                </p>
              </div>
            ) : (
              <>
                {data?.score >= 6 && data?.score < 8 ? (
                  <div className="justify-center items-center mt-6">
                    <Image
                      src="/images/good-result.png"
                      alt="medal"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                    <p className="mt-2 text-xl text-[#abb2af] ">
                      Phát huy thêm bạn nhé!
                    </p>
                  </div>
                ) : (
                  <div className="justify-center items-center mt-6">
                    <Image
                      src="/images/average-result.png"
                      alt="medal"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                    <p className="mt-2 text-xl text-[#abb2af] ">
                      Cố gắng hơn bạn nhé!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <Divider className="mt-6 bg-[#f2f2f2]" />

          <div className="flex justify-between items-center mt-4">
            <p className="text-[#1D1D1D] font-medium text-lg">
              Thời gian làm bài
            </p>
            <div className="flex items-center">
              <Icon type="time" svgProps={{ fill: "#07375C" }} size={16} />
              <p className="text-[#07375C] ml-2 font-semibold text-lg">
                {`${String(Math.floor(data?.timeWork / 60)).padStart(
                  2,
                  "0"
                )}:${String(Math.round(data?.timeWork % 60)).padStart(2, "0")}`}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="rounded-md py-4 text-center bg-[#E7F9F4]">
              <p className="text-2xl text-[#219b67] font-semibold">
                {data?.rightAnswer || 0}
              </p>
              <p className="mt-2 text-lg text-[#7f8080]">Số câu đúng</p>
            </div>
            <div className="rounded-md py-4 text-center bg-[#E7F9F4]">
              <p className="text-2xl text-[#EF4444] font-semibold">
                {data?.wrongAnswer || 0}
              </p>
              <p className="mt-2 text-lg text-[#7f8080]">Số câu sai</p>
            </div>
            <div className="rounded-md py-4 text-center bg-[#E7F9F4]">
              <p className="text-2xl text-[#D5A307] font-semibold">
                {data?.totalQuestion -
                  (data?.rightAnswer + data?.wrongAnswer) || 0}
              </p>
              <p className="mt-2 text-lg text-[#7f8080]">Số câu bỏ qua</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button
            buttonType={"primary"}
            onClick={() => {
              router.push(`${ROUTES.TEST_BANK}/dap-an/${examId}/1`);
            }}
          >
            Xem đáp án
          </Button>
          <div>
            <Button
              buttonType={"outline"}
              onClick={() => {
                router.push(`${ROUTES.TEST_BANK}${ROUTES.TEST_COMPLETE}`);
              }}
              className="mt-5"
            >
              Quay trở lại trang chính
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExamResults() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExamResult />
    </QueryClientProvider>
  );
}
