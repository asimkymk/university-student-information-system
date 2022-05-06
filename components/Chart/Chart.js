import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const state = {
    labels: ['Tıp', 'Mühendislik', 'Orman', 'Veterinerlik', 'Eğitim', 'Sağlık Bilimleri', 'Eczacılık', 'İşletme'],
    datasets: [
        {
            label: 'Öğretim görevlisi sayısı',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: "rgba(241, 187, 50, 0.8)",
            borderWidth: 2,
            borderRadius: 10,
            maxBarThickness:60,
            data: [140, 180, 100, 80, 50, 80, 120, 80]
        }
    ]
}
const options = {
    scales: {
        yAxis: {
            min: 0,
            max: 200,
            beginAtZero: true,
            ticks:{
                precision:0,
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    },
    responsive: true,
    maintainAspectRatio: false,
}

export default class App extends React.Component {
    render() {
        return (
            <Bar
                data={state}
                options={options}
            />
        );
    }
}