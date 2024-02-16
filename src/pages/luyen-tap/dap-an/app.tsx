"use client";

import React, { useEffect } from "react";
import Container from "@/components/atoms/container";
import { ROUTES } from "@/utils/constans";
import { useParams, useRouter } from "next/navigation";

function ExamResult() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (params?.id) {
      router.push(`${ROUTES.TEST_BANK}/dap-an/${params?.id}/${1}`);
    }
  }, [params?.id]);

  return <Container>Xem lại đáp án - Học Mở</Container>;
}

export default ExamResult;
