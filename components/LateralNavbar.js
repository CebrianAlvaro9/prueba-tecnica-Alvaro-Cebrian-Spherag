import { menuItems } from '../data/staticData.js'
//https://spherag.com/wp-content/uploads/2024/04/cropped-Icon_spherag-192x192.png

// Lateral Navbar Component
class LateralNavbar extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = /*html*/ `
    <nav
    id="sidebarMenu"
    class="d-md-block sidebar bg-navbar p-2 d-none d-md-block sidebar bg-navbar p-2 "
    style="height: 100vh"
    >
    <div
        class="list-group list-group-flush pt-1 p-1 d-flex flex-column align-items-center"
    >
        <img
        src="https://spherag.com/wp-content/uploads/2024/04/cropped-Icon_spherag-32x32.png"
        alt="Logo"
        class="logo mb-3"
        />

        ${menuItems
            .map(
                (item) => `
        <a
        href="#"
        class="list-group-item-action d-flex justify-content-center"
        style="width: 40px; height: 40px"
        >
        ${item.icon} </a
        >`
            )
            .join('')}
    </div>
    </nav>   
    `
    }
}
//Register element in the DOM
customElements.define('lateral-navbar-component', LateralNavbar)
