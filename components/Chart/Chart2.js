import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  scales: {
    yAxis: {
      min: 0,
      beginAtZero: true,
      ticks: {
        precision: 0,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const state = {
      labels: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"],
      datasets: [
        {
          label: "Günlük Ders Sayısı",
          borderColor: "rgba(0,0,0,0)",
          backgroundColor: "rgba(17, 38, 62, 0.8)",
          borderWidth: 2,
          borderRadius: 10,
          maxBarThickness: 60,
          data: this.props.data,
        },
      ],
    };
    return <Bar data={state} options={options} />;
  }
}
