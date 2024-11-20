class Spinner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ 
            `<div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>`;
    }
}

customElements.define('spinner-component', Spinner);