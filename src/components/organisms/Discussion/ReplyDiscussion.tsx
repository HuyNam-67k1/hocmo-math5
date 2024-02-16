import Dropdowns from "@/components/molecules/Accordion/AccordionReply";
import clsx from "clsx";
import Image from "next/image";
import { PropsWithChildren, useCallback, useState } from "react";
import {
  useAddDiscussion,
  useDeleteDiscussion,
  useUpdateDiscussion,
} from "../API/discuss/discussApi";
import { toast } from "react-toastify";
import Dropdown from "@/components/atoms/dropdownDiscuss";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import vi from "javascript-time-ago/locale/vi.json";

TimeAgo.addDefaultLocale(vi);

const ReplyDiscussion = ({
  reply,
  selectedLesson,
}: {
  reply: any;
  selectedLesson: any;
}) => {
  const [replys, setReply] = useState("");
  const [checkReply, setCheckReply] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const { mutateAsync: deleteDiscussion } = useDeleteDiscussion();
  const { mutateAsync: updateDiscussion } = useUpdateDiscussion(reply?.id);
  const { mutateAsync: addComment } = useAddDiscussion();
  const handlePostData = useCallback(
    async (data: any) => {
      const result = await addComment({ ...data });
      if (result) {
        toast.success("Comment successfully");
      } else {
        toast.error("Comment failed");
      }
    },
    [addComment]
  );
  const submitHandler = (e: any) => {
    e.preventDefault();

    handlePostData({
      discussionContent: replys,
      lesson: { id: selectedLesson },
      parentId: reply?.id,
    });

    setReply("");
    setShowReplyBox(false);
    setCheckReply(false);
  };

  const handleDeleteDiscussion = useCallback(
    async (data: any) => {
      const result = await deleteDiscussion({ ...data });
      if (result) {
        toast.success("Delete successfully");
      } else {
        toast.error("Delete failed");
      }
    },
    [deleteDiscussion]
  );

  const handleUpdateDiscussion = useCallback(
    async (data: any) => {
      const result = await updateDiscussion({ ...data });
      if (result) {
        toast.success("Update successfully");
      } else {
        toast.error("Update failed");
      }
    },
    [updateDiscussion]
  );

  const submitDelete = (e: any) => {
    handleDeleteDiscussion({
      discussionId: reply?.id,
    });
  };

  const submitUpdate = (e: any) => {
    handleUpdateDiscussion({
      discussionId: reply?.id,
      discussionContent: replys,
    });
  };

  return (
    <>
      <article className="py-6 pl-6 ml-20 mb-6 text-base bg-[#fafafa] rounded-xl dark:bg-gray-900 border-b border-[#d9d8d8]">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-2xl font-semibold text-gray-600 dark:text-white">
              <Image
                className="mx-4 rounded-full"
                src="/images/avatar.png"
                alt="Michael Gough"
                width={36}
                height={36}
              />
              @usename
            </p>
            <p className="text-lg text-[#a1a2a1] dark:text-gray-400 ml-3 pt-1">
              <ReactTimeAgo date={reply?.createdDate} locale="vi" />
            </p>
          </div>
          <div className="pr-2">
            <Dropdowns
              key={reply?._id}
              header={<Dropdown isActive={true}></Dropdown>}
              body={
                <div className="mr-2">
                  <div className="py-1 text-md text-gray-700 dark:text-gray-200 flex gap-2">
                    {/* <button
                      onClick={submitUpdate}
                      className="px-2 hover:bg-[#f1fff9] dark:hover:bg-gray-600 dark:hover:text-white rounded-lg w-[80px] text-center border border-[#ece9e9]"
                    >
                      Sửa
                    </button> */}
                    <button
                      onClick={submitDelete}
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
            __html: reply?.discussionContent || "",
          }}
          className="text-gray-500 dark:text-gray-400 p-4 ml-6 text-2xl"
        />
        {/* <div className="flex items-center mb-5 ml-4">
          <AccordionDiscuss
            key={reply?._id}
            header={
              <SectionHeader isActive={true}>
                <b className="text-lg mt-1 lg:text-xl !font-semibold bg-[#fafafa]">
                  Trả lời
                </b>
              </SectionHeader>
            }
            body={
              <div className="mt-2">
                <form onSubmit={submitHandler}>
                  <input
                    className="p-2 font-serif mt-2 rounded-md border-2 min-h-[35px] min-w-[500px] text-[#4d4f4e]"
                    value={replys}
                    onChange={(e) => setReply(e.target.value)}
                    onClick={() => setCheckReply(true)}
                    type="text"
                    placeholder="Thêm câu trả lời..."
                  />
                  {checkReply && (
                    <button className="bg-[#f1fff9] rounded-md mx-2 mt-3 text-[#1b5139] ml-5 py-1 px-6 text-xl border border-inherit border-[#1b5139]">
                      Trả lời
                    </button>
                  )}
                </form>
              </div>
            }
          />
        </div> */}
      </article>
    </>
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
        "flex justify-between bg-[#fafafa] items-center rounded-lg mt-2",
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

export default ReplyDiscussion;
