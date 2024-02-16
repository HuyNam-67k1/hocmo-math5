import { usePathname } from "next/navigation";
import { Collapsible } from "@/components/atoms/Collapsible";
import { PerformanceChart } from "../Chart/PerformanceChart";

function ExamItemFinal({ exam }: { exam: any }) {
  return (
    <>
      {exam?.map((item: any, index: number) => {
        return (
          <>
            {}
            <Collapsible
              titleClassName="flex px-[24px] bg-[#ECF6FD] min-h-[66px] mb-[6px] bg-[#f1fff9] ml-6 rounded-lg my-6"
              title={
                <>
                  <div className="flex w-full">
                    <div
                      className="flex justify-between items-center text-2xl font-semibold font-mediumhover:text-[#219B67] 
                  cursor-pointer hover:text-[#388d68] w-9/12"
                    >
                      {item?.title}
                    </div>
                    <p className="text-lg w-3/12 text-right pr-5 items-center mt-1 font-medium">
                      Tổng số lần làm&nbsp;
                      <span>({item?.userScoreViewDTOs?.length})</span>
                    </p>
                  </div>
                </>
              }
              content={
                <div className={`ml-10 mb-10 mt-4`}>
                  <>
                    <PerformanceChart datas={item} />
                    <div className="mt-10 ml-10">
                      <p className="text-xl text-[#6d6d6d] font-semibold">
                        Chi tiết:
                      </p>
                      <ul className="text-lg ml-[114px] text-[#808181] font-medium">
                        <div className="flex items-center">
                          <div>
                            <li className="list-disc">
                              Tổng số lần làm:&nbsp;
                              <span className="text-[#343333] font-semibold">
                                {item?.totalPracticed ?? 0}
                              </span>
                            </li>
                            <li className="list-disc mt-1">
                              Điểm trung bình:&nbsp;
                              <span className="text-[#343333] font-semibold">
                                {(item?.mediumScore ?? 0).toFixed(1)}
                              </span>
                            </li>
                          </div>
                          <div className="ml-16">
                            <li className="list-disc">
                              Điểm cao nhất:&nbsp;
                              <span className="text-[#343333] font-semibold">
                                {(item?.maxScore ?? 0).toFixed(1)}
                              </span>
                            </li>
                            <li className="list-disc mt-1">
                              Điểm thấp nhất:&nbsp;
                              <span className="text-[#343333] font-semibold">
                                {(item?.minScore ?? 0).toFixed(1)}
                              </span>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </>
                </div>
              }
            />
          </>
        );
      })}
    </>
  );
}

export default ExamItemFinal;
