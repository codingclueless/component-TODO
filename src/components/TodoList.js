import Component from './Component.js';
import TodoItem from './TodoItem.js';


class TodoList extends Component {

    render() {
        const list = this.renderDOM();

        const todos = this.props.todos;

        todos.forEach(todos => {
            const todoItem = new TodoItem({ todos });
            const todoItemDOM = todoItem.render();

            list.appendChild(todoItemDOM);
        });
        return list;
    }


    renderTemplate() {
        return /*html*/`
            <ul id="todo-list">future list</ul>
        `;
    }
}

export default TodoList;