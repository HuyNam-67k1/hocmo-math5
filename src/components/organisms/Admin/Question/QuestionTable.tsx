import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  getAllQuestion,
  deleteQuestionById,
} from "../../API/question/questionApi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import { Form, Radio, Divider, Button, Space, Pagination, Table } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { TableProps } from "antd/es/table";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { Input, Modal, Select } from "antd";
import { Toaster, toast } from "sonner";

import { getQuestionById } from "../../API/question/questionApi";
import { AnyARecord } from "dns";
interface DataType {
  key: number;
  id: number;
  chapter: string;
  questionType: {
    name: string;
  };
  content: string;
}
const QuestionTable = () => {
  const columnsFactory: ColumnsType<DataType> = [
    {
      title: "ID",
      width: 40,
      dataIndex: "id",
      sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    },
    {
      title: "Chương",
      dataIndex: "chapter",
      width: 370,
      render: (subject: any) => (
        <MathJaxContext>
          <MathJax>
            <StyleQuestion
              dangerouslySetInnerHTML={{
                __html: (subject?.name as any) || "",
              }}
            />
          </MathJax>
        </MathJaxContext>
      ),
    },
    {
      title: "Loại",
      dataIndex: "questionType",
      width: 100,
      render: (subject: any) => subject?.name,
      filters: [
        {
          text: "Chọn một",
          value: "Chọn một",
        },
        {
          text: "Chọn nhiều",
          value: "Chọn nhiều",
        },
      ],
      onFilter: (value, record) =>
        (record.questionType.name as string) == value,
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      width: 250,
      render: (item: any) => (
        <MathJaxContext>
          <MathJax>
            <StyleQuestion
              dangerouslySetInnerHTML={{
                __html: (item as any) || "",
              }}
            />
          </MathJax>
        </MathJaxContext>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      fixed: "right",
      width: 100,
      render: (item: any) => (
        <Space>
          {/* <QuestionEditModal id={item} /> */}
          <Button
            type="primary"
            ghost
            icon={<EditOutlined />}
            onClick={() => {
              openModal(item);
            }}
            style={{
              width: "45px",
            }}
          ></Button>
          <Button
            type="dashed"
            danger
            ghost
            onClick={() => {
              deleteQuesstion(item);
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  const StyleQuestion = styled.span`
    p {
      display: flex;
      align-items: center;
    }
    img {
      padding: 12px;
    }
  `;

  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>("large");

  const [showHeader, setShowHeader] = useState(true);

  const [tableLayout, setTableLayout] = useState(undefined);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string | undefined>(undefined);

  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columnsFactory.map((item: any) => ({
    ...item,
  }));
  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const tableProps: TableProps<DataType> = {
    bordered,
    loading,
    size,
    showHeader,
    scroll,
    tableLayout,
  };

  interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue>;
  }
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination: TablePaginationConfig) => {
    getAllQuestion((pagination.current as number) - 1).then((data) => {
      setData(data?.data?.contents);
      setTableParams({
        pagination: {
          current: data?.data?.numberOfCurrentPage + 1,
          pageSize: data?.data?.sizeCurrentItems,
          total: data?.data?.totalItems,
        },
      });
    });
    setTableParams({
      pagination,
    });
  };
  const [data, setData] = useState([] as any);
  useEffect(() => {
    getAllQuestion(0).then((data) => {
      setData(data?.data?.contents);
      setTableParams({
        pagination: {
          current: data?.data?.numberOfCurrentPage + 1,
          pageSize: data?.data?.sizeCurrentItems,
          total: data?.data?.totalItems,
        },
      });
    });
  }, []);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const { Option } = Select;

  const handleOk = (values: any) => {
    setIsOpenCreateForm(false);
  };
  const [dataEdit, setDataEdit] = useState({} as any);

  const openModal = async (id: number) => {
    await getQuestionById(id).then((dataEdit) => {
      setDataEdit(dataEdit?.data);
    });
    setIsOpenCreateForm(true);
  };

  const deleteQuesstion = (id: number) => {
    deleteQuestionById(id);
    toast.success("Xoá câu hỏi thành công");
    // getAllQuestion(data?.data?.numberOfCurrentPage).then((dataUpdate) => {
    //   setData(dataUpdate?.data?.contents);
    //   setTableParams({
    //     pagination: {
    //       current: dataUpdate?.data?.numberOfCurrentPage + 1,
    //       pageSize: dataUpdate?.data?.sizeCurrentItems,
    //       total: dataUpdate?.data?.totalItems,
    //     },
    //   });
    // });
  };

  const [isOpenCreateForm, setIsOpenCreateForm] = useState<boolean>(false);

  return (
    <>
      <Toaster position="top-right" richColors></Toaster>
      <Table
        {...tableProps}
        dataSource={data}
        columns={tableColumns}
        bordered
        scroll={scroll}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection}
        rowKey={(record) => record.id}
      />

      {isOpenCreateForm && (
        <Modal
          open
          title="Chỉnh sửa câu hỏi"
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
            onFinish={handleOk}
            layout="vertical"
          >
            <Form.Item label="ID" name="id">
              <Input defaultValue={dataEdit?.id} disabled></Input>
            </Form.Item>
            <Form.Item
              label="Chương"
              name="chapter"
              rules={[{ required: true, message: "Vui lòng chọn chương!" }]}
            >
              <Select defaultValue={dataEdit.chapter.name}>
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
              <Select defaultValue={dataEdit.questionType.name}>
                <Option value="option1">Chọn một</Option>
                <Option value="option2">Chọn nhiều</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Nội dung"
              name="content"
              rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
            >
              <Input.TextArea rows={4} defaultValue={dataEdit.content} />
            </Form.Item>
            <Form.Item
              name={"option-1"}
              label={`Đáp án 1`}
              style={{ width: "900px" }}
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Nhập đáp án"
                defaultValue={dataEdit.questionOptions[0].content}
              />
            </Form.Item>
            <Form.Item
              name={"option-2"}
              label={`Đáp án 2`}
              style={{ width: "900px" }}
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Nhập đáp án"
                defaultValue={dataEdit.questionOptions[1].content}
              />
            </Form.Item>
            <Form.Item
              name={"option-3"}
              label={`Đáp án 3`}
              style={{ width: "900px" }}
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Nhập đáp án"
                defaultValue={dataEdit.questionOptions[2].content}
              />
            </Form.Item>
            <Form.Item
              name={"option-4"}
              label={`Đáp án 4`}
              style={{ width: "900px" }}
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Nhập đáp án"
                defaultValue={dataEdit.questionOptions[3].content}
              />
            </Form.Item>
            <Form.Item
              name={"solution"}
              label={`Đáp án đúng`}
              style={{ width: "900px" }}
              rules={[
                { required: true, message: "Vui lòng nhập đáp án đúng!" },
              ]}
            >
              <Select
                // defaultValue={"Đáp án" + dataEdit.questionSolution.solution[0]}
                defaultValue={"Đáp án 2"}
              >
                <Option value="1">Đáp án 1</Option>
                <Option value="2">Đáp án 2</Option>
                <Option value="3">Đáp án 3</Option>
                <Option value="4">Đáp án 4</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default QuestionTable;
