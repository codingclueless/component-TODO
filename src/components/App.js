import Component from './components/Component.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>this is the main shit</main>
            </div>
        `;
    }
}

export default App;