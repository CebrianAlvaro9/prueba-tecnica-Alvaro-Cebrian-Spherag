import { fakeDataCards } from '../../../data/staticData.js'
import '../../../components/Spinner.js'
class CounterInfoCards extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    set data(value) {
        this._data = value
        this.render()
    }

    colorStatus(value) {
        if (value >= 0 && value <= 20) {
            return 'color-danger bg-danger-border '
        }
        if (value > 20 && value <= 40) {
            return 'color-warning bg-warning-border '
        }
        if (value > 40) {
            return 'color-success bg-success-border '
        }
    }

    render() {
        this.innerHTML = /*html*/ `
            <div class="flex-wrap d-flex p-2 gap-2 flex-col bg-content rounded-2">
                ${fakeDataCards
                    .map(
                        (card) => `
                            <div class="card flex-fill ">
                                <div class="card-body d-flex flex-column justify-content-center align-items-center ">
                                    <h5 class="card-title h6">${card.quantity} ${card.unit}</h5>
                                    <p style="font-size: 0.75rem" class="card-text h6">${card.description}</p>
                                </div>
                            </div>
                        `
                    )
                    .join('')}
                <div class="card dynamic-card flex-fill">
                   
                 ${
                     this._data
                         ? /*html*/ `
                              <div class="card-body d-flex flex-wrap gap-md-5 gap-2 justify-content-between align-items-start">
                                    <div class="d-flex flex-column">
                                        <p style="font-size: 0.75rem bg-green" class="px-2 card-text bg-green border rounded-1 text-success">
                                            Tiempo real
                                        </p>
                                        <p style="font-size: 0.9rem" class="card-text">
                                            Atlas ${this._data.atlasEnd}
                                        </p>
                                        <p style="font-size: 0.75rem" class="card-text">
                                            salida conector ${this._data.atlasElementId}
                                        </p>
                                    </div>
                                    <div class="d-flex flex-column align-items-center">
                                        <div class="d-flex flex-row flex-md-row align-items-center gap-1">
                                            <span class="${this.colorStatus(this._data.batteryPercentage)} d-flex flex-row align-items-center gap-2  rounded-1 p-1">
                                                <i style="font-size: 0.75rem" class="bi bi-battery-full color-child"></i>
                                                <p style="font-size: 0.75rem" class="card-text color-child ">
                                                    ${this._data.batteryPercentage}%
                                                </p>
                                            </span>
                                            <span class="d-flex flex-row align-items-center gap-2  rounded-1 p-1 ${this.colorStatus(this._data.signalPercentage)}">
                                                <i style="font-size: 0.75rem" class="bi bi-reception-4 color-child"></i>
                                                <p style="font-size: 0.75rem" class="card-text color-child ">
                                                    ${this._data.signalPercentage}
                                                </p>
                                            </span>
                                        </div>
                                        <p style="font-size: 1rem" class="card-text">123456789</p>
                                    </div>
                                  </div>
                                `
                         : '<div class=" px-5 py-4 d-flex flex-column justify-content-center align-items-center"><spinner-component></spinner-component></div>'
                 }
                    
                </div>
            </div>
        `
    }
}

customElements.define('counter-info-cards', CounterInfoCards)
