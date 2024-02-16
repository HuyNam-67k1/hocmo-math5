"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LessonContentProps } from "../LDBCoursesDetail/LDBCourseDetailLessonContent";
import ItemDiscusion from "./ItemDiscusion";
import { QueryClient, QueryClientProvider } from "react-query";
import { isEmpty } from "lodash";
import { getDiscussion, useAddDiscussion } from "../API/discuss/discussApi";
import { toast } from "react-toastify";

const queryClient = new QueryClient();

export interface AddDiscussionProps {
  discussionContent: string;
  lesson: { id: number };
  parentId: number;
}

export const DiscussionComment = ({
  selectedLesson,
}: {
  selectedLesson: LessonContentProps;
}) => {
  const { mutateAsync: addComment } = useAddDiscussion();

  const [checkComment, setCheckComment] = useState(false);

  const [comment, setComment] = useState("");

  const [newData, setNewData] = useState([] as any);

  const getUser = window.localStorage.getItem("user");

  const user = JSON.parse(getUser || "{}");

  const userName = user?.name ? user?.name : undefined;

  const checkSelectedLesson = useMemo(() => {
    return selectedLesson?.id;
  }, [selectedLesson]);

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

  const submitAdd = (e: any) => {
    e.preventDefault();

    handlePostData({
      discussionContent: comment,
      lesson: { id: checkSelectedLesson },
      parentId: null,
    });

    const unShiftData = [...newData];
    unShiftData.unshift({
      discussionContent: comment,
      lesson: { id: checkSelectedLesson },
      parentId: null,
    });

    setNewData(unShiftData);

    setComment("");
    setCheckComment(false);
  };

  const handleClear = () => {
    setComment("");
    setCheckComment(false);
  };

  // get api and set newData then call back data
  useEffect(() => {
    getDiscussion(checkSelectedLesson).then((data) => {
      setNewData(data?.data?.contents);
    });
  }, [checkSelectedLesson]);

  return (
    <div className="px-5 py-10 bg-white">
      <form onSubmit={submitAdd} className="mb-6 mx-16 mt-5">
        <div className="py-2 px-4 mb-4 bg-[#fafafa] rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onClick={() => setCheckComment(true)}
            id="comment"
            className="p-2  bg-[#fafafa] w-full min-h-[100px] max-h-[200px] text-xl text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder={
              isEmpty(newData)
                ? "Hãy để lại bình luận đầu tiên cho bài học này..."
                : "Bạn có thắc mắc gì trong bài học này..."
            }
            required
          />
        </div>

        {checkComment && (
          <div className="ml-4 !flex !justify-end gap-5">
            <button
              onClick={handleClear}
              className="inline-flex items-center py-1.5 w-[110px] justify-center text-xl font-medium text-center text-[#219b67] bg-white border border-[#219b67] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Huỷ
            </button>
            <button
              type="submit"
              className="inline-flex items-center py-1.5 w-[115px] justify-center text-xl font-medium text-center text-white bg-[#219b67] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Bình luận
            </button>
          </div>
        )}
      </form>
      <ItemDiscusion data={newData} selectedLesson={checkSelectedLesson} />
    </div>
  );
};
export default function Discusion({
  selectedLesson,
}: {
  selectedLesson: LessonContentProps;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <DiscussionComment
        selectedLesson={selectedLesson as LessonContentProps}
      />
    </QueryClientProvider>
  );
}
