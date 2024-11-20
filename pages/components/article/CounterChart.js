import "../../../components/Spinner.js"

class CounterChart extends HTMLElement {
    constructor() {
        super()
        this.chart = null // Referencia al gráfico
        this.chartData = null
    }

    connectedCallback() {
        this.render()
    }

    set data(value) {
        this._data = value
        this.render() 
        this.updateChart(this._data)
    }

    render() {
        this.innerHTML = /*html*/ `
      ${!this._data ? /*html*/
        `'<div class=" mt-5 d-flex flex-column justify-content-center align-items-center">
            <spinner-component></spinner-component>
        </div>'` : ''}
      <p class="no-data text-center "></p>
      <canvas  id="chart" ></canvas>
    `
    }

    //generates char with library chart.js
    updateChart(chartData) {
        // Destroy previus chart
        if (this.chart) {
            this.chart.destroy()
        }
        if (!chartData) {
            return
        }
        const dataType = chartData.flowRateData
            ? chartData.flowRateData
            : chartData.accumulatedFlowData

        const type = chartData.flowRateData ? 'Caudal' : 'Acumulado'

        const ctx = this.querySelector('#chart').getContext('2d')

        if (dataType.data.length == 0) {
            this.querySelector('.no-data').innerHTML =
                'No hay datos para mostrar'
            return
        }

        const labels = dataType.data.map((item) =>
            new Date(item.dateTS).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
            })
        )

        const dataValues = dataType.data.map((item) => item.value)

        //Data and config
        const data = {
            labels: labels,
            datasets: [
                {
                    label: type,
                    data: dataValues,
                    fill: true,
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 2,
                    pointRadius: 0,
                },
            ],
        }

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'm³',
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'Hora',
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
            },
        }

        this.chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options,
        })
    }
}

customElements.define('counter-chart', CounterChart)
