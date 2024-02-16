import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { getAllExcercise } from "../../API/exercise/exerciseApi";
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
import type {
  ExpandableConfig,
  TableRowSelection,
} from "antd/es/table/interface";

interface DataType {
  key: number;
  id: number;
  title: string;
  createdDate: string;
  modifiedDate: string;
}

const columnsFactory: ColumnsType<DataType> = [
  {
    title: "ID",
    width: 50,
    dataIndex: "id",
  },
  {
    title: "Tên",
    width: 70,
    dataIndex: "title",
  },
  {
    title: "Ngày chỉnh sửa",
    dataIndex: "modifiedDate",
    width: 180,
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdDate",
    width: 180,
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 140,
    render: (item: any) => (
      <Space>
        <Button type="text">
          <EditOutlined />
        </Button>
        <Button type="text">
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

const ExerciseTable = () => {
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
    getAllExcercise((pagination.current as number) - 1).then((data) => {
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
    getAllExcercise(0).then((data) => {
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
  return (
    <>
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
    </>
  );
};

export default ExerciseTable;
