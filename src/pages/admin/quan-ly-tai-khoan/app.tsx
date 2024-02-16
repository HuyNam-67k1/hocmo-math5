"use client";
import { Layout } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import AccountCreateButton from "@/components/organisms/Admin/Acount/AccountCreateButton";
import Header from "@/components/organisms/Layout/Header";
import SidebarAdmin from "@/components/organisms/Admin/SidebarAdmin";
import AccountTable from "@/components/organisms/Admin/Acount/AccountTable";
const QuestionManagement = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-56px)] ">
        <div className="hidden lg:block lg:flex-[0_0_250px]">
          <SidebarAdmin selected={"5"} />
        </div>

        <Layout>
          <PageHeader
            ghost={false}
            className="site-page-header h-[80px] items-center pt-5 mx-12"
            title="Danh sách người dùng"
            extra={<AccountCreateButton />}
          />
          <Layout className="p-[24px_24px_60px] bg-white">
            <AccountTable />
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default QuestionManagement;
