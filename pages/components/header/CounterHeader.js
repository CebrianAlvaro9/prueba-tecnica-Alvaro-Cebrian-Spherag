class CounterHeader extends HTMLElement {
    constructor() {
        super()

        this.innerHTML = /*html*/ ` <div class="d-flex gap-3">
      <a
        class="nav-link bg-cian text-center rounded p-1 d-flex justify-content-center align-items-center"
        href="#"
        style="width: 45px; height: 45px"
      >
        <i class="bi bi-caret-left"></i>
      </a>

      <div class="d-flex flex-column">
        <h1 class="h6 text-dark">Nombre del contador</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" style="font-size: 0.75rem">
            <li class="breadcrumb-item"><i class="bi bi-geo-alt"></i></li>
            <li class="breadcrumb-item"><a href="#">Finca</a></li>
            <li class="breadcrumb-item"><a href="#">Atlas</a></li>
            <li class="breadcrumb-item"><a href="#">Nombre de Atlas</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Nombre del contador 
            </li>
          </ol>
        </nav>
      </div>
    </div>`
    }
}
customElements.define('counter-header', CounterHeader)
