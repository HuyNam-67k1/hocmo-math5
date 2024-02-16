import { Button, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteUser, getAllUser } from "../../API/user/user";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import Router from "next/router";

const AccountTable = () => {
  const router = useRouter();

  const deleteUserTable = (id: number) => {
    deleteUser(id);
    toast.success("Xoá tài khoản thành công");
    router.replace("/admin/quan-ly-tai-khoan");
  };
  const columnsFactory: any = () => {
    return [
      {
        title: "ID",
        width: 70,
        dataIndex: "id",
        key: "id",
      },

      {
        title: "Họ và tên",
        width: 120,
        dataIndex: "name",
        key: "name",
        // render: (subject: any) => subject?.name,
      },

      {
        title: "Email",
        width: 180,
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Số điện thoại",
        dataIndex: "phone",
        key: "phone",
        width: 100,
      },
      {
        title: "Ngày tạo",
        dataIndex: "createdDate",
        key: "createdDate",
        width: 140,
      },
      {
        title: "Ngày chỉnh sửa",
        dataIndex: "modifiedDate",
        key: "modifiedDate",
        width: 140,
      },
      {
        title: "Action",
        dataIndex: "id",
        key: "id",
        fixed: "right",
        width: 50,
        render: (item: any) => (
          <Space>
            <Button type="primary" ghost>
              <EditOutlined />
            </Button>
            <Button
              type="dashed"
              danger
              ghost
              onClick={() => {
                deleteUserTable(item);
              }}
            >
              <DeleteOutlined />
            </Button>
          </Space>
        ),
      },
    ];
  };
  const [data, setData] = useState([] as any);
  useEffect(() => {
    getAllUser(0).then((data) => {
      setData(data?.data?.contents);
    });
  }, []);
  return (
    <>
      <Table
        dataSource={data}
        columns={columnsFactory()}
        bordered
        pagination={false}
      />
    </>
  );
};

export default AccountTable;
