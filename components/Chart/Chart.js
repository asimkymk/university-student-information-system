import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const state = {
    labels: ['1. Dönem', '2. Dönem', '3. Dönem', '4. Dönem', '5. Dönem', '6. Dönem', '7. Dönem', '8. Dönem'],
    datasets: [
        {
            label: 'Dönem ortalaması',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: "rgba(241, 187, 50, 0.8)",
            borderWidth: 2,
            borderRadius: 10,
            data: [3.40, 3.56, 3.10, 2.5, 1.8, 3.30, 3.62, 3.80]
        }
    ]
}
const options = {
    scales: {
        yAxis: {
            min: 0,
            max: 4.0,
            beginAtZero: true,
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