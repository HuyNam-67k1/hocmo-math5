"use client";

import React, { useEffect } from "react";
import Container from "@/components/atoms/container";
import { ROUTES } from "@/utils/constans";
import { useParams, useRouter } from "next/navigation";

function ExamAttempt() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (params?.id) {
      router.push(`${ROUTES.TEST_BANK}/${params?.id}/lam-bai/${1}`);
    }
  }, [params?.id]);

  return <Container>Luyện Đề - Học Mở</Container>;
}

export default ExamAttempt;
