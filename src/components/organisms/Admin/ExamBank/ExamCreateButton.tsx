import { Button, Modal } from "antd";
import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";

const ExamCreateButton = () => {
  const [isOpenCreateForm, setIsOpenCreateForm] = useState<boolean>(false);
  return (
    <>
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        onClick={() => {
          setIsOpenCreateForm(true);
        }}
        className="font-bold"
      >
        Tạo đề thi
      </Button>

      {isOpenCreateForm && (
        <Modal
          open
          footer={false}
          title="Tạo đề thi"
          onCancel={() => setIsOpenCreateForm(false)}
          width="100vw"
          style={{
            top: 0,
            margin: 0,
            height: "100vh",
            maxWidth: "100vw",
            padding: "150px",
            marginBottom: "100px",
          }}
          bodyStyle={{ height: "calc(100vh - 300px)", overflowY: "auto" }}
        ></Modal>
      )}
    </>
  );
};

export default ExamCreateButton;
