import Image from "next/image";
import { ROUTES } from "@/utils/constans";
import { usePathname } from "next/navigation";
import { Collapsible } from "@/components/atoms/Collapsible";
import { isEmpty } from "lodash";

function ExamItem({ exam }: { exam: any }) {
  const pathname = usePathname();
  const getUser = window.localStorage.getItem("user");
  const user = JSON.parse(getUser || "{}");

  return (
    <>
      {exam?.map((item: any, index: number) => {
        return (
          <>
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
                <div className={`grid grid-cols-2 gap-4 ml-10 mb-10 mt-4`}>
                  {item?.userScoreViewDTOs?.map((exam: any, index: number) => {
                    return (
                      <>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#ddd6d6] hover:border-[#84d09f] hover:shadow-2xl">
                          <a
                            href={
                              isEmpty(user)
                                ? ROUTES.AUTHEN
                                : `${ROUTES.TEST_BANK}/dap-an/${exam?.id}/ket-qua`
                            }
                            rel="noreferrer"
                          >
                            <div className="py-3">
                              <div className="flex">
                                <div
                                  className={
                                    "w-[60px] h-[60px] mr-4 rounded-[50%] ml-4 bg-[#E9F5F0] mt-8"
                                  }
                                >
                                  <Image
                                    src="/images/img-toan.png"
                                    alt="icon-toan"
                                    width={50}
                                    height={50}
                                    className="w-full h-full"
                                  />
                                </div>
                                <div className="flex-1 mr-3">
                                  <p className="mr-auto text-right">
                                    <div className="flex-1 items-center mr-auto">
                                      <span className="p-1 px-3 font-medium bg-[#eaf7ea] rounded-lg text-[#747373]">
                                        45 phút
                                      </span>
                                    </div>
                                  </p>
                                  <p className="line-clamp-2 min-h-[94px] font-semibold	text-2xl pl-2 pt-3">
                                    <span className="text-[#363333]">
                                      {item?.title}
                                    </span>
                                  </p>

                                  <div>
                                    {pathname !== ROUTES.TEST_BANK && (
                                      <div className="ml-2 flex justify-between text-[#787777]">
                                        <p>{`Ngày: ${new Date(
                                          exam?.createdDate || 0
                                        ).toLocaleDateString("vi")}`}</p>
                                        <p>
                                          Điểm:&nbsp;
                                          <span className="text-[#504e4e] font-bold">
                                            {(exam?.score).toFixed(1)}
                                          </span>
                                          /10
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="justify-between bg-[#eff9fb] h-[45px] p-2 px-6 items-center">
                                <div className="text-center	items-center text-lg font-semibold leading-7">
                                  <span className="text-[#319e6f] rounded-lg">
                                    Đã làm lần (
                                    {item?.userScoreViewDTOs?.length - index})
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              }
            />
          </>
        );
      })}
    </>
  );
}

export default ExamItem;
