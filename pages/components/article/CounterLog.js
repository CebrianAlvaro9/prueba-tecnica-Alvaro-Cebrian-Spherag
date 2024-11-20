import { format } from 'date-fns'
import "../../../components/Spinner.js"
class CounterLog extends HTMLElement {
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

    render() {
        this.innerHTML = /*html*/ `
        <div class="d-flex flex-column ">
        ${
          this._data
              ? /*html*/ `<table style="font-size: 0.75rem" class="table  col-4 ">
            <thead>
              <tr>
                <th scope="col"><i class="bi bi-database"></i></th>
                <th scope="col">Mensaje</th>
                <th scope="col">Dato</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead>
            
            <tbody class="text-muted">
              <tr >
                <td class="text-muted"></i></td>
                <td class="text-muted">Creación</td>
                <td class="text-muted"></td>
                <td class="text-muted">${format(
                    new Date(this._data.creationDate),
                    'dd/MM/yyyy HH:mm:ss'
                )}</td>
              </tr>
              <tr>
                <td class="text-muted"></td>
                <td class="text-muted">Edición</td>
                <td class="text-muted"></td>
                <td class="text-muted">05/09/2023<br>09:02:48</td>
              </tr>
              <tr >
                <td class="bg-input-navbar text-muted"><i class="bi bi-person"></i></td>
                <td class="bg-input-navbar text-muted">Actualización</td>
                <td class="bg-input-navbar text-muted"></td>
                <td class="bg-input-navbar text-muted">${format(
                    new Date(this._data.lastUpdatedDate),
                    'dd/MM/yyyy HH:mm:ss'
                )}</td>
              </tr>
              <tr>
                <td class="text-muted"></td>
                <td class="text-muted">Actualización</td>
                <td class="text-muted">30 m³</td>
                <td class="text-muted">${format(
                    new Date(this._data.lastUpdatedDate),
                    'dd/MM/yyyy HH:mm:ss'
                )}</td>
              </tr>
            </tbody>
                          `
                    : '<div class="d-flex justify-content-center pt-3"><spinner-component></spinner-component></div>'
            }
          
          </table>
        </div>

      `
    }
}

customElements.define('counter-log', CounterLog)
