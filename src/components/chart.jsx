import React, { createRef, useEffect, useRef } from "react";
import Chart from "chart.js";
export default function MyChart({data}) {
  const ref = createRef();

  useEffect(() => {
    var ctx = ref.current.getContext("2d");
    new Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: data.arrayCases,
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  }, [data.arrayCases,ref]);
  return (
    <canvas id="customizeChart" width={400} height={400} ref={ref}></canvas>
  );
}
