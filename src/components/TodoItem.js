import Component from './Component.js';


class TodoItem extends Component {

    renderTemplate(){
        const todos = this.props.todos;

        return /*html*/`
            <li>
                <h2 class="task">${todos.task}</h2>
                <button class="remove-button"></button>
            </li>
        `;
    }

} 

export default TodoItem;