"use client";

import { Button, Card, Form, FormInstance, Tooltip, Input, Select } from "antd";
import { FilterFilled } from "@ant-design/icons";

const { Search } = Input;

const GroupFilter = ({ form }: { form: FormInstance }) => {
  return (
    <Card
      title="Bộ lọc"
      size="small"
      bodyStyle={{ height: 210, overflowY: "auto" }}
      extra={
        <>
          <Button
            type="default"
            icon={<FilterFilled />}
            onClick={() => {
              form.submit();
            }}
          >
            Lọc
          </Button>
          <Button
            type="text"
            onClick={() => {
              form.resetFields();
              form.submit();
            }}
          >
            Reset
          </Button>
        </>
      }
    >
      <Form.Item label="Chương" name="curriculumId" labelCol={{ span: 24 }}>
        <Select
          placeholder="Chọn chương"
          options={[
            { value: "0", label: "Chương 1" },
            { value: "1", label: "Chương 2" },
            { value: "2", label: "Chương 3" },
            { value: "3", label: "Chương 4" },
          ]}
        />
      </Form.Item>

      <Form.Item label="Bài" name="canDuplicate" labelCol={{ span: 24 }}>
        <Select placeholder="Chọn bài" optionFilterProp="children" />
      </Form.Item>
    </Card>
  );
};

const QuestionFilter = () => {
  const [form] = Form.useForm();

  return (
    <Form
      name="question-filter"
      form={form}
      autoComplete="off"
      layout="vertical"
      className="flex justify-between px-5 pt-3"
      initialValues={{}}
    >
      <Form.Item name="q">
        <Search
          allowClear
          placeholder="Tìm bài học theo tên"
          style={{ width: 320 }}
        />
      </Form.Item>
      <Tooltip
        color="white"
        title={<GroupFilter form={form} />}
        trigger="click"
        placement="bottomRight"
        zIndex={1001}
        autoAdjustOverflow={false}
        overlayStyle={{ width: 400, maxWidth: 400 }}
      >
        <Button type={"dashed"}>Bộ lọc</Button>
      </Tooltip>
    </Form>
  );
};

export default QuestionFilter;
