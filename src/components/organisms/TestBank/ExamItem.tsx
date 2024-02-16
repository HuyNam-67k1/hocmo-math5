import Image from "next/image";
import { ROUTES } from "@/utils/constans";
import { usePathname } from "next/navigation";
import { Collapsible } from "@/components/atoms/Collapsible";
import { isEmpty } from "lodash";

function ExamItem({ exam }: any) {
  const pathname = usePathname();

  const getUser = window.localStorage.getItem("user");
  const user = JSON.parse(getUser || "{}");

  return (
    <>
      <div className={`grid grid-cols-2 gap-4 ml-10 mb-10 mt-4`}>
        {Object.values(exam).map((item: any, index: number) => {
          const checkStateExam = window.localStorage.getItem(
            `stateExam.${item?.id}`
          );

          return (
            <>
              <div className="grid">
                <a
                  href={
                    isEmpty(user)
                      ? ROUTES.AUTHEN
                      : pathname === ROUTES.TEST_BANK
                      ? `${ROUTES.TEST_BANK}/${item?.id}`
                      : checkStateExam === "true"
                      ? `${ROUTES.TEST_BANK}/${item?.id}/ket-qua`
                      : `${ROUTES.TEST_BANK}/${item?.id}`
                  }
                  className="bg-white rounded-xl shadow-lg overflow-hidden mt-5 border border-[#ddd6d6] hover:border-[#84d09f] hover:shadow-2xl"
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
                            <span className="p-1 px-3 font-medium bg-[#eaf7ea] rounded-lg">
                              45 phút
                            </span>
                          </div>
                        </p>
                        <p className="line-clamp-3 min-h-[94px] font-semibold	text-2xl pl-2 pt-3">
                          <span className="text-[#363333]">{item?.title}</span>
                        </p>

                        <div></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#eff9fb] h-[40px]"></div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ExamItem;
