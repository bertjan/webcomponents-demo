class DemoElement2 extends HTMLElement {
    constructor() {
        super();
        console.log('constructed!');
        this.innerHTML = '<span>Hello, world!</span>'
    }

    connectedCallback() {
        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
    }

    adoptedCallback() {
        console.log('adopted!');
    }

}

window.customElements.define('demo-component-2', DemoElement2);

