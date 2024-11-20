import './components/NavbarMenu.js'
import './components/LateralNavbar.js'
import './style.css'
import { authentication } from './auth/auth.js'

// pre-render before authentication
function renderInitialLayout() {
    document.querySelector('#app').innerHTML = /*html*/ `
    <div class="d-flex w-100">
      <div>
        <lateral-navbar-component></lateral-navbar-component>
      </div>
      <div class="w-100">
        <div class="d-flex flex-column flex-shrink-0">
          <navbar-component></navbar-component>
          <div class="content"></div>
          <p>Loading content...</p>
        </div>
      </div>
    </div>
  `
}

// first, render app layout
renderInitialLayout()

// after auth, render content
authentication()
