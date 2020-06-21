/* ChartJS
 * -------
 * Data and config for chartjs
 */
"use strict";

var w_data = {
  labels: ["1st week", "2nd week", "3rd week", "4th week"],
  datasets: [
    {
      label: "#amounts",
      data: [70, 100, 85, 130],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
      fill: false,
    },
  ],
};
var options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

function updateBarChart(keys, values) {
  let chartData = {
    labels: keys,
    datasets: [
      {
        label: "#amounts",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: "bar",
      data: chartData,
      options: options,
    });
  }
}
function updateMonthlyChart(data) {
  let keys = Object.keys(data)
  let values = Object.values(data)

  let chartData = {
    labels: keys,
    datasets: [
      {
        label: "#amounts",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  if ($("#lineChart1").length) {
    var lineChartCanvas1 = $("#lineChart1").get(0).getContext("2d");
    var lineChart1 = new Chart(lineChartCanvas1, {
      type: "line",
      data: chartData,
      options: options,
    });
  }
}
function updateWeeklyChart(data) {
  let keys = Object.keys(data)
  let values = Object.values(data)

  let chartData = {
    labels: keys,
    datasets: [
      {
        label: "#amounts",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  if ($("#lineChart2").length) {
    var lineChartCanvas2 = $("#lineChart2").get(0).getContext("2d");
    var lineChart2 = new Chart(lineChartCanvas2, {
      type: "line",
      data: chartData,
      options: options,
    });
  }
}



if ($("#browserTrafficChart").length) {
  var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
  var doughnutChart = new Chart(doughnutChartCanvas, {
    type: "doughnut",
    data: browserTrafficData,
    options: doughnutPieOptions,
  });
}
