const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
    color: blue;
    }
    
    h1 {
    color: red;
    }

</style>
<h1>Header</h1>

<div id="content"></div>
`;

class DemoElement3 extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$content = this._shadowRoot.querySelector('#content');
        this.$content.appendChild(document.createTextNode("test"));
        // this.innerHTML = template.innerHTML;
    }

}

window.customElements.define('demo-component-3', DemoElement3);

