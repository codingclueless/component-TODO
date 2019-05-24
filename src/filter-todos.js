function filterTodos(todos, filter) { 
    const lowerCaseFilter = filter.text.toLowerCase();
    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasTask = lowerCaseTask.includes(lowerCaseFilter);
        console.log(hasTask);
        return hasTask;


    });
}

export default filterTodos;