import { Layout } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import ExamCreateButton from "../ExamBank/ExamCreateButton";
import ExamTable from "../ExamBank/ExamTable";

const ExamManagement = () => {
  return (
    <Layout>
      <PageHeader
        ghost={false}
        className="site-page-header h-[80px] items-center pt-5 mx-12"
        title="Danh sách đề thi"
        extra={<ExamCreateButton />}
      />
      <Layout className="p-[24px_24px_60px] bg-white">
        <ExamTable />
      </Layout>
    </Layout>
  );
};

export default ExamManagement;
