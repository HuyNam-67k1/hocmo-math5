"use client";

import ExamItem from "./ExamItem";
import { QueryClient, QueryClientProvider } from "react-query";
import { useListExam } from "../API/exam/examApi";
import { Collapsible } from "@/components/atoms/Collapsible";
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

function MyExamList({
  isTie = false,
  title = <ExamListTitle title="" />,
  className,
}: ExamListProps) {
  const { data: data } = useListExam();

  const newData = [] as any;

  data?.data?.forEach((item: any) => {
    if (!newData[item?.chapterDTO?.name]) {
      newData[item?.chapterDTO?.name] = [];
    }
    newData[item?.chapterDTO?.name].push(item);
  });

  return (
    <div className={className}>
      <span className="text-2xl">{title}</span>
      <div>
        {Object.values(newData).map((item: any, index: any) => (
          <>
            <Collapsible
              openByDefault
              className=""
              titleClassName="flex px-[24px] bg-[#ECF6FD] min-h-[66px] mb-[6px] bg-[#ecf6fd] ml-6 mr-2 rounded-lg my-6"
              title={
                <>
                  <div className="text-xl font-semibold text-[#07375C] mr-10 py-2 w-10/12">
                    {isEmpty(Object.keys(newData)[index])
                      ? "Đề thi tổng hợp"
                      : Object.keys(newData)[index]}
                  </div>
                  <p className="text-lg w-2/12 text-[#07375C] text-right pr-5 items-center mt-1 font-medium">
                    ({item?.length}) đề
                  </p>
                </>
              }
              content={<ExamItem key={item?.id} exam={item} />}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default function ExamList() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyExamList />
    </QueryClientProvider>
  );
}
