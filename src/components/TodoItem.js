import Component from './Component.js';


class TodoItem extends Component {

    render() {

        const todoItem = this.renderDOM();
        const todos = this.props.todos;
        const onRemove = this.props.onRemove;
        const removeButton = todoItem.querySelector('button');
        
        removeButton.addEventListener('click', () => {
            onRemove(todos);
        });

        return todoItem;
    }

    renderTemplate(){
        const todos = this.props.todos;

        let checked = '';

        if(todos.completed) {
            checked = 'checked';
        }

        return /*html*/`
            <li>
                <button class="remove-button" type="checkbox" name="task" ${checked}>
                ${todos.task}
                </button>
            </li>
        `;
    }

} 

export default TodoItem;