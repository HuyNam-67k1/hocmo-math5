import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dataCharts = (datas: any) => {
  const labels = datas?.userScoreViewDTOs?.map((item: any, index: number) => {
    return `Lần ${index + 1}`;
  });
  const datach = datas?.userScoreViewDTOs?.map((item: any, index: number) => {
    return item?.score.toFixed(1);
  });
  const data = datach.reverse();

  return {
    labels,
    onclick: () => {},
    datasets: [
      {
        label: "Kết quả làm bài",
        data,
        borderColor: "rgb(39, 161, 109)",
        backgroundColor: "rgb(39, 161, 109)",
        pointBackgroundColor(context: Record<string, any>) {
          if (!context?.raw?.attended) {
            return "red";
          }
          return "rgb(39, 161, 109)";
        },
        pointBorderColor(context: Record<string, any>) {
          if (!context?.raw?.attended) {
            return "red";
          }
          return "rgb(39, 161, 109)";
        },
      },
    ],
  };
};

export const PerformanceChart = ({ datas }: { datas: any }) => {
  const dataChar = useMemo(() => {
    return dataCharts(datas);
  }, [datas]);

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
            return `${datas?.title}`;
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
        max: 10,
      },
    },
  };

  return <Line options={options as any} data={dataChar} />;
};
