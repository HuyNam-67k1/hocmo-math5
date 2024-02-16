import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

export interface LessonContentProps {
  id: number;
  title: string;
  content: string;
  description?: string;
  courseCode?: string;
  lessonSourceMediaLinkVideo?: string;
  lessonSourceMediaLinkImage: string;
  classId?: string;
  lessonId?: number;
  skuType?: string;
  type?: number;
  chapter: any;
}
export interface AddDiscussionProps {
  discussionContent: string;
  lesson: { id: number };
  parentId: any;
}

export const useGetDiscussion = (checkSelectedLesson: number) => {
  return useQuery("getDiscussion", () => getDiscussion(checkSelectedLesson));
};
export const useAddDiscussion = () =>
  useMutation((discuss: any) => addDiscussion({ ...discuss }));

export const useDeleteDiscussion = () => useMutation(deleteDiscussion);

export const useUpdateDiscussion = (discussionId: number) =>
  useMutation(() => updateDiscussion(discussionId));

// get api
export const getDiscussion = async (checkSelectedLesson: number) => {
  const response = await fetch(
    `${DOMAIN_API}/api/discussion/lesson/${checkSelectedLesson}?page=0&limit=10`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

export const addDiscussion = async (discuss: AddDiscussionProps) => {
  const body = {
    ...discuss,
  };

  return fetch(`${DOMAIN_API}/api/discussion`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
};

const deleteDiscussion = async (discussionId: number) => {
  return fetch(`${DOMAIN_API}/api/discussion/${discussionId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
};

const updateDiscussion = async (discussionId: number) => {
  return fetch(`${DOMAIN_API}/api/discussion/${discussionId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
};
