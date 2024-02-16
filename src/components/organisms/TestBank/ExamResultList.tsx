"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import ExamItemResult from "./ExamItemResult";
import { useHistory } from "../API/exam/history/examHistoryApi";
import { FindNotFound } from "@/components/atoms/FindNotFound";
import { isEmpty } from "lodash";

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

function MyExamList({
  isTie = false,
  title = <ExamListTitle title="" />,
  className,
}: ExamListProps) {
  const { data: dataHistory } = useHistory();

  return (
    <div className={className}>
      <span className="text-2xl">{title}</span>
      <div>
        {isEmpty(dataHistory?.data) ? (
          <FindNotFound title={titleNotFound} className="mt-[120px]" />
        ) : (
          <ExamItemResult key={dataHistory?.id} exam={dataHistory?.data} />
        )}
      </div>
    </div>
  );
}

export default function ExamItemResults() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyExamList />
    </QueryClientProvider>
  );
}
