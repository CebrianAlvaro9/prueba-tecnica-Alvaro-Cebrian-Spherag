class CounterInputSelector extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const initialChartType = this.getAttribute('charttype') //Initial value
        this.render(initialChartType)

        //listen changes an dispatch event on input selector
        this.querySelector('.form-select').addEventListener(
            'change',
            (event) => {
                const newValue = event.target.value
                this.dispatchEvent(
                    new CustomEvent('charttype-change', {
                        detail: newValue,
                        bubbles: true,
                        composed: true,
                    })
                )
            }
        )
    }

    disconnectedCallback() {
        // Remove the event listener
        this.querySelector('.form-select').removeEventListener(
            'change',
            () => {}
        )
    }

    render(selectedValue) {
        this.innerHTML = /*html*/ `
      <div class="col-md-4 col-12">
        <h6>Tipo de grafico</h6>
        <select  class="form-select bg-input-navbar  font-monospace text-muted " style="font-size: 0.85rem; padding: 0.20rem 0.5rem;" aria-label="Default select example">
          <option value="2" ${
              selectedValue === '2' ? 'selected' : ''
          }>Acumulado</option>
          <option value="1" ${
              selectedValue === '1' ? 'selected' : ''
          }>Caudal</option>
        </select>
      </div>
    `
    }
}

customElements.define('counter-input-selector', CounterInputSelector)
