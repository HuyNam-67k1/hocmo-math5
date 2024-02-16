import { Button, Form, Input, Modal, Select, Space } from "antd";
import { useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { truncateSync } from "fs";
import { Toaster, toast } from "sonner";
import { createQuestion } from "../../API/question/questionApi";
export interface Question {
  content: string;
  explanation?: string;
  questionOptions?: QuestionOption;
  questionSolution: QuestionSolution;
  chapter?: Chapter;
  questionType?: QuestionType;
}
export interface Chapter {
  id: number;
}
export interface QuestionType {
  id: number;
}
export interface QuestionSolution {
  solution: [];
}
export interface QuestionOption {
  content?: string;
  order?: number;
}
const QuestionCreateModal = () => {
  const [isOpenCreateForm, setIsOpenCreateForm] = useState<boolean>(false);
  const { Option } = Select;

  const handleOk = (values: any) => {
    createQuestion({
      content: values.content,
      explanation: values.explanation,
      questionOptions: [
        {
          content: values.option1,
        },
        {
          content: values.option2,
        },
        {
          content: values.option3,
        },
        {
          content: values.option4,
        },
      ],
      questionSolution: {
        solutionStr: values.solution,
      },
      chapter: {
        id: values.chapter,
      },
      questionType: {
        id: values.type,
      },
    });
    toast.success("Tạo câu hỏi thành công");
    form.resetFields();
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
        Tạo câu hỏi
      </Button>

      {isOpenCreateForm && (
        <Modal
          open
          title="Tạo mới câu hỏi"
          onCancel={() => setIsOpenCreateForm(false)}
          width="100vw"
          style={{
            top: 0,
            margin: 0,
            height: "80vh",
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
            form={form}
            onFinish={handleOk}
            layout="vertical"
          >
            <Form.Item
              label="Chương"
              name="chapter"
              rules={[{ required: true, message: "Vui lòng chọn chương!" }]}
            >
              <Select>
                <Option value="1">
                  Chương một: ÔN TẬP VÀ BỔ SUNG KIẾN THỨC VỀ PHÂN SỐ. GIẢI TOÁN
                  LIÊN QUAN ĐẾN TỈ LỆ. BẢNG ĐƠN VỊ ĐO ĐIỆN TÍCH
                </Option>
                <Option value="2">
                  Chương hai: SỐ THẬP PHÂN. CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN (
                  I-SỐ THÂP PHÂN)
                </Option>
                <Option value="3">
                  Chương hai: SỐ THẬP PHÂN. CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN (
                  II-CÁC PHÉP TÍNH VỚI SỐ THÂP PHÂN)
                </Option>
                <Option value="4">Chương ba: HÌNH HỌC</Option>
                <Option value="5">
                  Chương bốn: SỐ ĐO THỜI GIAN.TOÁN CHUYỂN ĐỘNG ĐỀU (I-SỐ ĐO THƠI
                  GIAN)
                </Option>
                <Option value="6">
                  Chương bốn: SỐ ĐO THỜI GIAN.TOÁN CHUYỂN ĐỘNG ĐỀU (II-VẬN TỐC,
                  QUÃNG ĐƯỜNG, THỜI GIAN)
                </Option>
                <Option value="7">
                  Chương năm: ÔN TẬP (I-ÔN TẬP VỀ SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP
                  PHÂN, SỐ ĐO ĐẠI LƯỢNG)
                </Option>
                <Option value="8">
                  Chương năm: ÔN TẬP (II-ÔN TẬP VỀ CÁC PHÉP TÍNH VỚI CÁC SỐ TỰ
                  NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN)
                </Option>
                <Option value="9">
                  Chương năm: ÔN TẬP (III-ÔN TẬP VỀ HÌNH HỌC)
                </Option>
                <Option value="10">
                  Chương năm: ÔN TẬP (VI-ÔN TẬP VỀ GIẢI TOÁN)
                </Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Loại"
              name="type"
              rules={[{ required: true, message: "Vui chọn nhập loại!" }]}
            >
              <Select>
                <Option value="1">Chọn một</Option>
                <Option value="2">Chọn nhiều</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Nội dung"
              name="content"
              rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Giải thích - Lời giải" name="explanation">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name={"option1"}
              label={`Đáp án 1`}
              style={{ width: "900px" }}
              rules={[{ required: true, message: "Vui lòng nhập đáp án!" }]}
            >
              <Input placeholder="Nhập đáp án" />
            </Form.Item>
            <Form.Item
              name={"option2"}
              label={`Đáp án 2`}
              style={{ width: "900px" }}
              rules={[{ required: true, message: "Vui lòng nhập đáp án!" }]}
            >
              <Input placeholder="Nhập đáp án" />
            </Form.Item>
            <Form.Item
              name={"option3"}
              label={`Đáp án 3`}
              style={{ width: "900px" }}
              rules={[{ required: true, message: "Vui lòng nhập đáp án!" }]}
            >
              <Input placeholder="Nhập đáp án" />
            </Form.Item>
            <Form.Item
              name={"option4"}
              label={`Đáp án 4`}
              style={{ width: "900px" }}
              rules={[{ required: true, message: "Vui lòng nhập đáp án!" }]}
            >
              <Input placeholder="Nhập đáp án" />
            </Form.Item>
            <Form.Item
              name={"solution"}
              label={`Đáp án đúng`}
              style={{ width: "900px" }}
              rules={[
                { required: true, message: "Vui lòng nhập đáp án đúng!" },
              ]}
            >
              <Select>
                <Option value="1">Đáp án 1</Option>
                <Option value="2">Đáp án 2</Option>
                <Option value="3">Đáp án 3</Option>
                <Option value="4">Đáp án 4</Option>
              </Select>
            </Form.Item>
            {/* <Form.List name={"solutions"} initialValue={fieldForm}>
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
         </Form.List> */}
          </Form>
        </Modal>
      )}
    </>
  );
};

export default QuestionCreateModal;
