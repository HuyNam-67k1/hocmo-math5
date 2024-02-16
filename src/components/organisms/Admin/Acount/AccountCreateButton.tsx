import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { PlusOutlined } from "@ant-design/icons";
import { Toaster, toast } from "sonner";
import { register } from "../../API/register/register";

const AccountCreateButton = () => {
  const [isOpenCreateForm, setIsOpenCreateForm] = useState<boolean>(false);
  const router = useRouter();

  const handleOk = (values: any) => {
    register({
      name: values.userName,
      phone: values.phone,
      email: values.email,
      password: values.password,
    });
    toast.success("Tạo tài khoản thành công");
    form.resetFields();
    router.refresh();
  };
  const [form] = Form.useForm();
  // setIsOpenCreateForm(false);
  return (
    <>
      <Toaster position="top-right" richColors></Toaster>
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        onClick={() => {
          setIsOpenCreateForm(true);
        }}
        className="font-bold"
      >
        Tạo tài khoản
      </Button>

      {isOpenCreateForm && (
        <Modal
          open
          title="Tạo tài khoản"
          onCancel={() => setIsOpenCreateForm(false)}
          width="100vw"
          style={{
            top: 0,
            margin: 0,
            height: "50vh",
            maxWidth: "100vw",
            padding: "150px",
            marginBottom: "100px",
          }}
          bodyStyle={{ height: "calc(80vh - 300px)", overflowY: "auto" }}
          footer={[
            <Button
              key="back"
              danger
              onClick={() => setIsOpenCreateForm(false)}
            >
              Hủy
            </Button>,
            <Button key="submit" form="myForm" htmlType="submit">
              Xác nhận
            </Button>,
          ]}
        >
          <Form<Record<string, any>>
            id="myForm"
            form={form}
            onFinish={handleOk}
            layout="vertical"
          >
            <Form.Item
              name={"userName"}
              label={`Tên người dùng`}
              style={{ width: "900px" }}
              rules={[{ required: true, message: "Vui lòng nhập" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              name={"email"}
              label={"Email"}
              style={{ width: "900px" }}
              rules={[{ required: true, message: "Vui lòng nhập" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              name={"phone"}
              label={"Số điện thoại"}
              style={{ width: "900px" }}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              name={"password"}
              label={`Mật khẩu`}
              style={{ width: "900px" }}
              rules={[{ required: true, message: "Vui lòng nhập" }]}
            >
              <Input placeholder="" />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AccountCreateButton;
