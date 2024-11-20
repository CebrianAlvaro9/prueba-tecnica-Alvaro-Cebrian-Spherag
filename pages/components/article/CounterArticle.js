import './CounterInputSelector.js'
import './CounterChart.js'
import './CounterAside.js'
import './CounterInfoCards.js'
import './CounterLog.js'
// CounterArticle.js
import { fetchData } from '../../hooks/fetchCounterData.js'
//Main content where all the data is rendered
class CounterArticle extends HTMLElement {
    constructor() {
        super()
        // default values
        if (!this.hasAttribute('charttype')) {
            this.setAttribute('charttype', 1)
        }
        if (!this.hasAttribute('date')) {
            this.setAttribute(
                'date',
                JSON.stringify({
                    id: 'b24h',
                    x: Date.now(),
                    y: Date.now() + 24 * 60 * 60 * 1000,
                })
            )
        }
    }

    // Observed attributes this are for managing the variables between components child to parent
    static get observedAttributes() {
        return ['charttype', 'refresh', 'date']
    }

    // connectedCallback is called when the element is added to the DOM
    connectedCallback() {
        this.render()

        fetchData(1, Date.now() - 24 * 60 * 60 * 1000, Date.now()).then(
            (data) => {
                this.setAttributes(data)
            }
        )

        // listen when the charttype or date is changed
        this.addEventListener('charttype-change', (event) => {
            const newChartType = event.detail
            this.setAttribute('charttype', newChartType)
        })

        this.addEventListener('date-change', (event) => {
            const newDate = event.detail
            this.setAttribute('date', JSON.stringify(newDate))
        })
    }
    // attributeChangedCallback is called when an observed attribute is changed this allows us to react to changes
    attributeChangedCallback(name, oldValue, newValue) {
        //fetch data when the type is changed using the charttype and date
        if (name === 'charttype' && oldValue !== newValue) {
            const parsedDate = JSON.parse(this.getAttribute('date')) || {}
            fetchData(newValue, parsedDate.x, parsedDate.y).then((data) => {
                this.setAttributes(data)
            })
            this.render()
        }
        //fetch data when the date is changed or when the datepicker is changed
        if (name === 'date') {
            const parsedDate = JSON.parse(newValue)
            if (oldValue !== newValue || parsedDate.id === 'datePicker') {
                fetchData(
                    this.getAttribute('charttype'),
                    parsedDate.x,
                    parsedDate.y
                ).then((data) => {
                    this.setAttributes(data)
                })
                this.render()
            }
        }
    }
    // Function to send data to the child components
    setAttributes(data) {
        ;['counter-chart', 'counter-info-cards', 'counter-log'].map((el) => {
            const child = this.querySelector(el);
            if (child) {
                child.data = data; 
            }
        })
    }

    render() {
        this.innerHTML = /*html*/ `
            <counter-info-cards></counter-info-cards>
            <div class="d-flex justify-content-between flex-column flex-md-row py-2">
                <div class="d-flex flex-column flex-fill gap-2 p-2">
                    <counter-input-selector
                        charttype="${this.getAttribute('charttype')}"></counter-input-selector>
                    <counter-chart></counter-chart>
                </div>
                <div class="d-flex flex-column  gap-2">
                    <counter-aside 
                        date=${this.getAttribute('date')}></counter-aside>
                    <counter-log ></counter-log>
                </div>
            </div>
    `
    // Sending the data to childs via properties
    this.setAttributes(
        JSON.parse(this.getAttribute('data'))
    );
    }
}

customElements.define('counter-article', CounterArticle)
