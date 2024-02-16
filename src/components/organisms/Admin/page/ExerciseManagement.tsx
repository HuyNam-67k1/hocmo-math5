import { Layout } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import CourseTable from "../Exercise/ExerciseTable";

const ExerciseManagement = () => {
  return (
    <Layout>
      <PageHeader
        ghost={false}
        className="site-page-header h-[80px] items-center pt-5 mx-12"
        title="Danh sách bài luyện tập"
      />
      <Layout className="p-[24px_24px_60px] bg-white">
        <CourseTable />
      </Layout>
    </Layout>
  );
};

export default ExerciseManagement;
