"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useHistory } from "../../API/exam/history/examHistoryApi";
import ExamItemFinal from "./ExamItemFinal";
import { FindNotFound } from "@/components/atoms/FindNotFound";
import { isEmpty } from "lodash";
import { StatisticsChart } from "../Chart/StatisticsChart";
import { useGetStatistics } from "../../API/exam/resultExamApi";
import { Icons } from "marathon-design-system";

const queryClient = new QueryClient();

interface ExamListProps {
  id?: number;
  title?: React.ReactElement;
  description?: string;
  quantity?: number;
  duration?: number;
  questions?: [];
  toAttemptResult?: boolean;
  filter?: {
    courseId?: number;
    lessonId?: number;
    q?: string;
    page?: number;
    limit?: number;
    source?: string;
  };
  sort?: string;
  isTie?: boolean;
  emptyTitle?: React.ReactElement;
  className?: string;
}

function ExamListTitle({ title }: { title: string }) {
  return (
    <p className="text-xl text-[#07375C] font-semibold mt-[10px] ml-5 text-[20px]">
      {title}
    </p>
  );
}

const titleNotFound = (
  <span className="text-xl text-[#07375C] font-semibold mt-[10px] ml-5 text-[20px]">
    Không tìm thấy kết quả!
  </span>
);

function ExamFinalLists({
  isTie = false,
  title = <ExamListTitle title="" />,
  className,
}: ExamListProps) {
  const { data: dataHistory } = useHistory();

  return (
    <div className={className}>
      <div className="p-4 text-[#07375C] font-semibold text-xl">
        <div className="flex">
          <Icons.BookSvg width={25} height={25} className="mr-2" />
          <span>Thống kê kết quả luyện đề theo chương/mục:</span>
        </div>
        <StatisticsChart />
      </div>
      <span className="text-2xl">{title}</span>
      <div>
        {isEmpty(dataHistory?.data) ? (
          <FindNotFound title={titleNotFound} className="mt-[120px]" />
        ) : (
          <div className="pt-5">
            <span className="pl-5 text-[#07375C] font-semibold text-xl flex">
              <Icons.IdeaFill width={34} height={34} className="" />
              <span className="mt-1">
                Thống kê kết quả luyện đề theo từng đề:
              </span>
            </span>
            <ExamItemFinal key={dataHistory?.id} exam={dataHistory?.data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExamFinalList() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExamFinalLists />
    </QueryClientProvider>
  );
}
