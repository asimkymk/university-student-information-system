import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const state = {
    labels: ['Tıp', 'Mühendislik', 'Orman', 'Veteriner', 'Eğitim', 'Sağlık Bilimleri', 'Eczacılık', 'İşletme'],
    datasets: [
        {
            label: 'Öğrenci sayısı',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: "rgba(17, 38, 62, 0.8)",
            borderWidth: 2,
            borderRadius: 10,
            maxBarThickness:60,
            data: [802, 1213, 420, 618, 415, 928, 532, 654]
        }
    ]
}

const options = {
    scales: {
        yAxis: {
            min: 0,
            max: 1400,
            beginAtZero: true,
            ticks:{
                precision:0
            }
        },
        
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