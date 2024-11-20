import './components/header/CounterHeader.js'
import './components/article/CounterArticle.js'
class Content extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = /*html*/ `
      <main role="main" class="p-4 bg-content">
        <div class="bg-white p-4 border rounded-2">
          <counter-header></counter-header>
          <counter-article></counter-article>
        </div>
      </main>
    `
    }
}

customElements.define('content-component', Content)
