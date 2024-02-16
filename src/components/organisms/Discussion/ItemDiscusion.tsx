"use client";

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import ReplyDiscussion from "./ReplyDiscussion";
import clsx from "clsx";
import AccordionDiscuss from "@/components/molecules/Accordion/AccordionDiscuss";
import Dropdowns from "@/components/molecules/Accordion/AccordionReply";
import Dropdown from "@/components/atoms/dropdownDiscuss";
import {
  useAddDiscussion,
  useDeleteDiscussion,
  addDiscussion,
} from "../API/discuss/discussApi";
import { toast } from "react-toastify";
import Accordion from "@/components/molecules/Accordion/Accordion";
import { Arrow } from "@/components/atoms/Arrow";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import vi from "javascript-time-ago/locale/vi.json";
import { isEmpty } from "lodash";

TimeAgo.addDefaultLocale(vi);

const ItemDiscusion = ({
  data,
  selectedLesson,
}: {
  data: any;
  selectedLesson: any;
}) => {
  const [activeList, setActiveList] = useState<number[]>([-1]);

  const [activeListVisited, setActiveListVisted] = useState<number[]>([-1]);

  const [reply, setReply] = useState("");

  const [checkReply, setCheckReply] = useState(false);

  const [showReplyBox, setShowReplyBox] = useState(false);

  const [checkReplyId, setCheckReplyId] = useState(0);

  const { mutateAsync: addDiscussItem } = useAddDiscussion();

  const { mutate: deleteDiscussion } = useDeleteDiscussion();

  const handleReply = useCallback(
    async (data: any) => {
      const result = await addDiscussItem({ ...data });
      if (result) {
        toast.success("Reply successfully");
      } else {
        toast.error("Reply failed");
      }
    },
    [addDiscussItem]
  );

  const submitReply = (e: any) => {
    e.preventDefault();

    handleReply({
      discussionContent: reply,
      lesson: { id: selectedLesson },
      parentId: checkReplyId,
    });

    setReply("");
    setShowReplyBox(false);
    setCheckReply(false);
  };

  const handleDeleteDiscussion = useCallback(
    (discussionId: number) => {
      deleteDiscussion(discussionId);
    },
    [deleteDiscussion]
  );

  return (
    <div>
      {data?.map((item: any, index: number) => (
        <>
          <article className="p-6 mx-20 mb-6 text-base bg-white rounded-xl dark:bg-gray-900 border-b border-[#eeeeee]">
            {/* <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-2xl font-semibold text-gray-900 dark:text-white">
                  <Image
                    className="mx-4 rounded-full"
                    src="/images/avatar_2.png"
                    alt="Michael Gough"
                    width={36}
                    height={36}
                  />
                  User name
                </p>
                <p className="text-md text-[#a1a2a1] dark:text-gray-400 ml-8 pt-1">
                  {format(new Date(item?.createdDate || ""), DATE_FORMAT)}
                </p>
              </div>
            </footer> */}
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-2xl font-semibold text-[#b6babc] dark:text-white">
                  <Image
                    className="mx-4 rounded-full"
                    src="/images/avatar.png"
                    alt="Michael Gough"
                    width={36}
                    height={36}
                  />
                  @username
                </p>
                <p className="text-lg text-[#a1a2a1] dark:text-gray-400 ml-3 pt-1">
                  {item?.createdDate ? (
                    <ReactTimeAgo date={item?.createdDate || ""} locale="vi" />
                  ) : (
                    "bây giờ"
                  )}
                </p>
              </div>
              <div className="pr-2">
                <Dropdowns
                  key={item?.id}
                  header={
                    <Dropdown isActive={true} className="bg-white"></Dropdown>
                  }
                  body={
                    <div className="mr-2">
                      <div className="py-1 text-md text-gray-700 dark:text-gray-20\ flex gap-2">
                        {/* <button
                          // onClick={submitUpdate}
                          className="px-2 hover:bg-[#f1fff9] dark:hover:bg-gray-600 dark:hover:text-white rounded-lg w-[80px] text-center border border-[#ece9e9]"
                        >
                          Sửa
                        </button> */}
                        <button
                          onClick={() => handleDeleteDiscussion(item?.id)}
                          className="px-4 hover:bg-[#f1fff9] dark:hover:bg-gray-600 dark:hover:text-white rounded-lg w-[80px] text-center border border-[#ece9e9]"
                        >
                          Xoá
                        </button>
                      </div>
                    </div>
                  }
                />
              </div>
            </footer>
            <p
              dangerouslySetInnerHTML={{
                __html: item?.discussionContent || "",
              }}
              className="text-gray-500 dark:text-gray-400 p-4 ml-6 text-2xl"
            />
            <div className="flex items-center mb-5 ml-4">
              <AccordionDiscuss
                key={item?._id}
                header={
                  <SectionHeader isActive={true}>
                    <b className="text-lg mt-1 lg:text-xl !font-semibold">
                      Trả lời
                    </b>
                  </SectionHeader>
                }
                body={
                  <div className="mt-2">
                    <form onSubmit={submitReply}>
                      <input
                        className="p-2 font-serif mt-2 mb-2 rounded-md border-2 min-h-[35px] min-w-[600px] text-[#4d4f4e]"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        onClick={() => setCheckReply(true)}
                        type="text"
                        placeholder="Thêm câu trả lời..."
                        required
                      />
                      {checkReply && (
                        <button
                          onClick={() => setCheckReplyId(item?.id || "")}
                          className="bg-[#f1fff9] rounded-md mx-2 mt-3 mb-2 text-[#1b5139] ml-5 py-1 px-6 text-xl border border-inherit border-[#1b5139]"
                        >
                          Trả lời
                        </button>
                      )}
                    </form>
                  </div>
                }
              />
            </div>

            {item?.discussionSubs?.length > 0 && (
              <div className="">
                <Accordion
                  key={item?.id}
                  onToggle={(isActive) => {
                    if (isActive && activeList.indexOf(index) === -1) {
                      setActiveList([...activeList, index]);
                      setActiveListVisted(
                        Array.from(new Set([...activeListVisited, index]))
                      );
                    } else if (activeList.indexOf(index) > -1) {
                      const newList = [...activeList];
                      newList.splice(newList.indexOf(index), 1);
                      setActiveList(newList);
                    }
                  }}
                  header={
                    <SectionHeaderReply
                      isActive={activeList.includes(index)}
                      isIcon={true}
                      extraText={`(${item?.discussionSubs?.length}) câu trả lời`}
                      titleClassName="flex px-6 bg-white rounded-xl	my-2"
                    />
                  }
                  body={
                    <>
                      {item?.discussionSubs?.map?.((reply: any) => {
                        return (
                          <ReplyDiscussion
                            key={reply?.id}
                            reply={reply}
                            selectedLesson={selectedLesson}
                          />
                        );
                      })}
                    </>
                  }
                />
              </div>
            )}
          </article>
        </>
      ))}
    </div>
  );
};

const SectionHeader = (
  props: PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    extraText?: string;
    isIcon?: boolean;
  }>
) => {
  const { children, extraText = "", className } = props;

  return (
    <div
      className={clsx(
        "flex justify-between bg-white items-center rounded-lg mt-2",
        className
      )}
    >
      <div
        className={`flex items-center text-[#817d7d] lg:text-base text-sm pr-1`}
      >
        {(props.isIcon ?? true) && (
          <svg
            aria-hidden="true"
            className="mr-1 w-7 h-7 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
        )}
        {children}
      </div>
      <div className="text-[#9B9B9B] lg:text-lg text-md whitespace-nowrap ml-4">
        {extraText}
      </div>
    </div>
  );
};
const SectionHeaderReply = (
  props: PropsWithChildren<{
    isActive?: boolean;
    extraText?: string;
    isIcon?: boolean;
    titleClassName?: string;
  }>
) => {
  const { isActive, children, extraText = "", titleClassName } = props;
  const textColor = isActive ? "#219B67" : "#219B67";

  return (
    <div
      className={clsx(
        "flex w-[200px] items-center text-[#424242] h-[45px]",
        titleClassName,
        {
          "bg-[#ffffff] font-normal !text-[#219B67]": isActive,
        }
      )}
    >
      <div
        className={`flex items-center text-[${textColor}] lg:text-base text-sm`}
      >
        <Arrow
          type={`${isActive ? "up" : "down"}`}
          borderWidth="2px"
          color={`${isActive ? "#219B67" : "#219B67"}`}
          width="4px"
          className={clsx({ "mt-[-4px]": !isActive }, { "mt-[4px]": isActive })}
        />
        {children}
      </div>
      <div
        className={clsx(
          "text-[#1f91c6] lg:text-[20px] text-lg whitespace-nowrap ml-2 font-medium",
          { "!text-[#22563d]": isActive }
        )}
      >
        <span className="text-[#219B67]">{extraText}</span>
      </div>
    </div>
  );
};

export default ItemDiscusion;
