import Component from './Component.js';


class TodoItem extends Component {

    renderTemplate(){
        const todos = this.props.todos;

        return /*html*/`
            <li>
            <button class="button">${todos.task}</button>
            </li>
        `;
    }

} 

export default TodoItem;