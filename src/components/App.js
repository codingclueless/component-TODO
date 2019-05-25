import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import todos from '../../data/todos.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import filterTodos from '../filter-todos.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        
        const header = new Header();
        const headerDOM = header.render();
        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const addTodo = new AddTodo({
            onAdd: newTodo => {
                todos.unshift(newTodo);
                todoList.update({ todos });
            }
        });
        const addTodoDOM = addTodo.render();
        main.appendChild(addTodoDOM);

        const filter = new Filter({
            onFilter: (filter) => {
                const filtered = filterTodos(todos, filter);
                console.log(filtered);
                todoList.update({ todos: filtered });
            }
        });
        const filterToDom = filter.render();
        main.appendChild(filterToDom);
        


        const todoList = new TodoList({ 
            todos, 
            onRemove: (toDoToRemove) => {
                const index = todos.indexOf(toDoToRemove);
                todos.splice(index, 1);
                todoList.update({ todos });
            },
        });

        const todoListDom = todoList.render();
        main.appendChild(todoListDom);
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;