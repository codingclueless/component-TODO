import Component from './Component.js';

class TodoList extends Component {

    renderTemplate() {
        return /*html*/`
            <ul id="todo-list">future list</ul>
        `;
    }
}

export default TodoList;