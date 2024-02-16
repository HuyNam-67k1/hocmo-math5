import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useGetStatistics } from "../../API/exam/resultExamApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const dataCharts = (datas: any) => {
  const labels = datas?.map((item: any, index: number) => {
    return `Chương ${item?.id}`;
  });

  return {
    labels,
    onclick: () => {},
    datasets: [
      {
        label: "Số câu đúng",
        data: datas?.map((item: any, index: number) => {
          return item?.rightAnswers;
        }),
        borderColor: "rgb(39, 161, 109)",
        backgroundColor: "rgba(39, 161, 109, 0.7)",
      },
      {
        label: "Số câu sai",
        data: datas?.map((item: any, index: number) => {
          return item?.wrongAnswers;
        }),
        borderColor: "rgb(39, 161, 109)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Số câu bỏ qua",
        data: datas?.map((item: any, index: number) => {
          return item?.missingAnswers;
        }),
        borderColor: "rgb(39, 161, 109)",
        backgroundColor: "rgba(204, 204, 0, 0.7)",
      },
      {
        label: "Toàn bộ câu hỏi",
        data: datas?.map((item: any, index: number) => {
          return item?.totalAnswers;
        }),
        borderColor: "rgb(39, 161, 109)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
};

export const StatisticsChart = () => {
  const { data: dataStatistics } = useGetStatistics();

  const checkDataStatistics = dataStatistics?.data?.filter(
    (item: any) => item?.totalAnswers !== 0
  );

  const dataChar = useMemo(() => {
    return dataCharts(checkDataStatistics);
  }, [dataStatistics?.data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
      },
      tooltip: {
        callbacks: {
          title(tooltipItem: any) {
            return `${dataStatistics?.data?.name}`;
          },
          label() {
            return;
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  return <Bar options={options as any} data={dataChar} />;
};
