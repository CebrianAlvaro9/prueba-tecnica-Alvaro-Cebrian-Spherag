import { dispatchDateEvent } from '../../hooks/dispatchDateEvent.js'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

class CounterAside extends HTMLElement {
    constructor() {
        super()
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.buttonId = 'b24h'
    }

    connectedCallback() {
        this.render()
        this.initDatePicker()

        this.querySelector('.buttons-row').addEventListener(
            'click',
            this.handleButtonClick
        )

        this.querySelector('#refreshButton').addEventListener(
            'click',
            this.handleRefreshButtonClick.bind(this)
        )
    }
    //custom date picker
    initDatePicker() {
        flatpickr(this.querySelector('#datePicker'), {
            mode: 'range',
            dateFormat: 'Y-m-d',
            onClose: (selectedDates) => {
                if (selectedDates.length === 2) {
                    const [startDate, endDate] = selectedDates
                    dispatchDateEvent('datePicker', this, startDate, endDate)
                }
            },
        })
    }

    handleRefreshButtonClick() {
        // dispatch the refresh event
        const dateAttr = this.getAttribute('date')
        if (dateAttr) {
            const { id, x, y } = JSON.parse(dateAttr)
            dispatchDateEvent(id, this, x, y)
        }
    }

    // function to handle button click
    handleButtonClick(event) {
        if (event.target.tagName === 'BUTTON') {
            const buttonId = event.target.id
            if (buttonId !== 'datePicker') {
                dispatchDateEvent(buttonId, this)
            }
        }
    }

    selected(id) {
        const buttonId = this.getAttribute('date')
            ? JSON.parse(this.getAttribute('date'))?.id
            : null
        return buttonId === id ? 'bg-cian' : 'bg-input-navbar'
    }

    render() {
        this.innerHTML = /*html*/ `
       <div class="d-flex flex-row gap-1 p-2 justify-content-between" >
          <p style="font-size: 0.75rem">Ultima conexion: ${new Date().toLocaleString()}</p>
          <button id="refreshButton" class="btn btn-sm border bg-cian">
             <i class="bi bi-arrow-clockwise"></i>
          </button>
      </div>
      <div class="d-flex flex-row buttons-row">
          <button id="b24h" class="${this.selected(
              'b24h'
          )} btn text-small px-3 py-1">24 H</button>
          <button id="b48h" class="${this.selected(
              'b48h'
          )} btn px-3 py-1">48 H</button>
          <button id="b7d" class="${this.selected(
              'b7d'
          )} btn px-3 py-1">7 D</button>
          <button id="b30d" class="${this.selected(
              'b30d'
          )} btn px-3 py-1">30 D</button>
          <button id="datePicker" class="${this.selected(
              'datePicker'
          )} btn px-3 py-1">
            <i class="bi bi-calendar-date fs-5"></i>
          </button>
        </div>
    `
    }

    disconnectedCallback() {
        this.querySelector('.buttons-row').removeEventListener(
            'click',
            this.handleButtonClick
        )
        this.querySelector('#refreshButton').removeEventListener(
            'click',
            this.handleRefreshButtonClick
        )
    }
}

customElements.define('counter-aside', CounterAside)
