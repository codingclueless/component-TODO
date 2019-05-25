import Component from './Component.js';
import TodoItem from './TodoItem.js';


class TodoList extends Component {

    render() {
        const list = this.renderDOM();
        const todos = this.props.todos;
        const onRemove = this.props.onRemove;

        todos.forEach(todos => {
            const todoItem = new TodoItem({ todos, onRemove });
            const todoItemDOM = todoItem.render();

            list.appendChild(todoItemDOM);
        });
        return list;
    }


    renderTemplate() {
        return /*html*/`
            <ul id="todo-list"></ul>
        `;
    }
}

export default TodoList;