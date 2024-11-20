// NavbarMenu
class NavbarMenu extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = /*html*/ `
    <nav class="bg-navbar">
    <div class="d-flex flex-column flex-md-row justify-content-between md:align-items-center">
        <div class="d-flex align-items-center">
        <a class="px-4 text-dark" href="#"><i class="bi bi-list fs-5"></i></a>
        <div class="input-group mx-2 col-md-4 bg-input-navbar">
            <input
            type="text"
            class="form-control bg-input-navbar font-monospace text-muted"
            placeholder="Mi Finca"
            style="
                font-size: 0.85rem;
                padding: 0.2rem 0.5rem;
                border-color: #dee2e6;
                border-right: none;
            "
            aria-label="Search"
            />
            <span
            class="input-group-text bg-input-navbar"
            style="border-color: #dee2e6; border-left: none"
            >
            <i class="bi bi-caret-down-fill text-muted"></i>
            </span>
        </div>
        </div>
        <ul
        class="navbar-nav d-flex flex-row align-items-center py-3 gap-3 p-2 px-4 bg-gray"
        style="
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0.5rem;
        "
        >
        <li class="nav-item position-relative">
            <a
            class="nav-link bg-white text-center rounded p-1 d-flex justify-content-center align-items-center"
            href="#"
            style="width: 30px; height: 30px"
            >
            <i class="bi bi-bell text-dark"></i>

            <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style="font-size: 0.6rem; padding: 0.25em 0.4em"
            >
                5
            </span>
            </a>
        </li>
        <li class="nav-item">
            <a
            class="nav-link bg-white text-center rounded p-1 d-flex justify-content-center align-items-center"
            href="#"
            style="width: 30px; height: 30px"
            >
            <i class="bi bi-info-circle text-dark"></i>
            </a>
        </li>
        <li class="nav-item d-flex flex-row align-items-center">
            <a
            class="nav-link bg-white text-center rounded align-items-center px-2 d-flex justify-content-center align-items-center"
            href="#"
            style="height: 30px"
            >
            <i class="bi bi-person text-dark"></i>
            <p style="font-size: 0.8rem" class="mb-0 px-2">
                correo@correousuario.com
            </p>
            </a>
        </li>
        </ul>
    </div>
    </nav>

    `
    }
}

customElements.define('navbar-component', NavbarMenu)
