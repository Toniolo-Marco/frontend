import React, { createRef, useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import { downloadData } from "../utils/statistics";
export default function MyChart() {
  const ref = createRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(downloadData());

    var ctx = ref.current.getContext("2d");
    new Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: data.xs,
        datasets: [
          {
            label: "Chart of Coronavirus Cases",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: data.ys,
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  }, []);
  return (
    <canvas id="customizeChart" width={400} height={400} ref={ref}></canvas>
  );
}
