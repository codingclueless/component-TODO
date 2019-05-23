import Component from './Component.js';

class AddTodo extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            
            const newTodo = {
                task: formData.get('task'),
            };

            onAdd(newTodo);

            form.reset();
            
            document.activeElement.blur();
        });
        return form;
    }

    renderTemplate(){
        return /*html*/`
            <form class="add-todo">
                <label> Add task:
                    <input type="text" name="task">
                </label>
                <button>Add</button>
            </form>
        `; 
    }
}

export default AddTodo;