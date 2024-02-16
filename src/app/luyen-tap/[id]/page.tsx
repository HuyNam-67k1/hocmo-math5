"use client";

import Image from "next/image";
import Link from "next/link";
import ExamLayout from "@/components/templates/ExamLayout";
import { ROUTES } from "@/utils/constans";
import { QueryClient, QueryClientProvider } from "react-query";
import { useMyExam } from "@/components/organisms/API/exam/examApi";
import { Button } from "marathon-design-system";
import HeaderTestBank from "@/components/organisms/TestBank/HeaderTestBank";
import { useParams } from "next/navigation";

const queryClient = new QueryClient();

function ExamDetail() {
  const params = useParams();
  const examId = params?.id;
  const { data: dataExam } = useMyExam(examId as any);
  const exam = dataExam?.data;

  return (
    <>
      <HeaderTestBank />
      <div className="h-[calc(100vh)] pt-8 lg:pt-100 md:pt-[60px] ">
        <div className="w-full md:max-w-[700px] mx-auto p-6 md:p-[70px] text-center bg-none md:bg-[url('/images/login-bg.png')] bg-cover aspect-[18/17]">
          <div className="px-6 py-8 bg-white rounded-xl shadow-md text-center mt-[100px] lg:mt-12 lg:min-h-[400px]">
            <div className="text-left p-2">
              <h1 className="text-large text-3xl font-semibold line-clamp-3 min-h-[48px] leading-7 py-2">
                <span className="text-[#1f91c6] font-bold text-3xl">
                  Đề:&nbsp;
                </span>
                {exam?.title}
              </h1>
              <div className="flex justify-between -mx-2 mt-8 text-xl">
                <div className="flex-1 border border-[#E0E0E0] rounded-md text-center mx-2 py-4">
                  <Image
                    src="/images/file-icon.png"
                    alt="time-icon"
                    width={42}
                    height={42}
                    className="justify-center inline-block"
                  />
                  <p className="font-semibold mt-3">
                    {exam?.questions?.length} câu
                  </p>
                  <p className="text-[#BDBDBD] mt-2">Số câu hỏi</p>
                </div>
                <div className="flex-1 border border-[#E0E0E0] rounded-md text-center mx-2 py-4 justify-center">
                  <Image
                    src="/images/time-icon.png"
                    alt="time-icon"
                    width={42}
                    height={42}
                    className="justify-center inline-block"
                  />
                  <p className="font-semibold mt-3">
                    {(exam?.duration / 60).toFixed(0)} phút
                  </p>
                  <p className="text-[#BDBDBD] mt-2">Thời gian</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <>
                <Link href={`${ROUTES.TEST_BANK}/${examId}/lam-bai`}>
                  <Button buttonType={"primary"}>Bắt đầu làm bài</Button>
                </Link>

                <br />
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ExamDetail.Layout = ExamLayout;

export default function ExamDetailst() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExamDetail />
    </QueryClientProvider>
  );
}
