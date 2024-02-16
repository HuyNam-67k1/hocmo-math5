import { Button, Form, Input, Modal, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { getQuestionById } from "../../API/question/questionApi";
interface DataType {
  key: number;
  id: number;
  chapter: string;
  questionType: {
    name: string;
  };
  content: string;
}

const QuestionEditModal: React.FC<{ id: number }> = ({ id }) => {
  const [isOpenCreateForm, setIsOpenCreateForm] = useState<boolean>(false);
  const { Option } = Select;

  const handleOk = (values: any) => {
    // Xử lý khi nhấn OK ở modal, có thể gửi giá trị values đi đâu đó
    console.log("Form values:", values);
    setIsOpenCreateForm(false);
  };
  const [data, setData] = useState({} as any);

  getQuestionById(id).then((data) => {
    setData(data?.data);
  });
  return (
    <>
      <Button
        type="primary"
        ghost
        icon={<EditOutlined />}
        onClick={() => {
          setIsOpenCreateForm(true);
        }}
        style={{
          width: "45px",
        }}
      ></Button>

      {isOpenCreateForm && (
        <Modal
          open
          title="Chỉnh sửa câu hỏi"
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
            onFinish={handleOk}
            layout="vertical"
          >
            <Form.Item label="ID" name="id">
              <Input defaultValue={data?.id}></Input>
            </Form.Item>
            <Form.Item
              label="Chương"
              name="chapter"
              rules={[{ required: true, message: "Vui lòng chọn chương!" }]}
            >
              <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Loại"
              name="type"
              rules={[{ required: true, message: "Vui chọn nhập loại!" }]}
            >
              <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Nội dung"
              name="content"
              rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.List name={"solutions"}>
              {(fields, { add, remove }) => {
                return (
                  <>
                    {fields.map((field, index) => {
                      return (
                        <Space
                          key={field.key}
                          direction="horizontal"
                          style={{
                            position: "relative",
                            marginRight: "13px",
                          }}
                        >
                          <Form.Item
                            name={field.name}
                            label={`Đáp án - ${index + 1}`}
                            style={{ width: "900px" }}
                            rules={[{ required: true }]}
                          >
                            <Input placeholder="Nhập đáp án" />
                          </Form.Item>
                          <Button
                            danger
                            onClick={() => remove(field.name)}
                            style={{ marginTop: "5px" }}
                            icon={<DeleteOutlined />}
                          />
                        </Space>
                      );
                    })}
                    <Form.Item>
                      <Button
                        type="dashed"
                        block
                        style={{ maxWidth: "893px" }}
                        icon={<PlusOutlined />}
                        onClick={() => add()}
                      >
                        Thêm đáp án
                      </Button>
                    </Form.Item>
                  </>
                );
              }}
            </Form.List>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default QuestionEditModal;
