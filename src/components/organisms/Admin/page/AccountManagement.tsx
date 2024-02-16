import { Layout } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import AcountTable from "../Acount/AccountTable";

const AccountManagement = () => {
  return (
    <Layout>
      <PageHeader
        ghost={false}
        className="site-page-header h-[80px] items-center pt-5 mx-12"
        title="Danh sách tài khoản"
      />
      <Layout className="p-[24px_24px_60px] bg-white">
        <AcountTable />
      </Layout>
    </Layout>
  );
};

export default AccountManagement;
