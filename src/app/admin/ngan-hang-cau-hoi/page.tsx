"use client";
import { Layout } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import ExamCreateButton from "@/components/organisms/Admin/ExamBank/ExamCreateButton";
import Header from "@/components/organisms/Layout/Header";
import SidebarAdmin from "@/components/organisms/Admin/SidebarAdmin";
import QuestionTable from "@/components/organisms/Admin/Question/QuestionTable";
import QuestionCreateModal from "@/components/organisms/Admin/Question/QuestionCreateModal";
// import { Refine } from "@refinedev/core";

const QuestionManagement = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-56px)] ">
        <div className="hidden lg:block lg:flex-[0_0_250px]">
          <SidebarAdmin selected={"4"} />
        </div>

        <Layout>
          <PageHeader
            ghost={false}
            className="site-page-header h-[80px] items-center pt-5 mx-12"
            title="Danh sách đề thi"
            extra={<QuestionCreateModal />}
          />
          <Layout className="p-[24px_24px_60px] bg-white">
            <QuestionTable />
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default QuestionManagement;
