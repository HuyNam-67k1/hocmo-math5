import { Layout } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import QuestionTable from "../Question/QuestionTable";
import QuestionFilter from "@/components/molecules/Fillter/QuestionFilter";

const QuestionManagement = () => {
  return (
    <Layout>
      <PageHeader
        ghost={false}
        className="site-page-header h-[80px] items-center pt-5 mx-12"
        title="Danh sách câu hỏi"
      />
      <Layout className="p-[24px_24px_60px] bg-white">
        <QuestionFilter />
        <QuestionTable />
      </Layout>
    </Layout>
  );
};

export default QuestionManagement;
