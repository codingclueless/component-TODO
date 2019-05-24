import filterTodos from '../src/filter-todos.js';

const test = QUnit.test;

QUnit.module('filter todos');

const todos = [
    {
        task: 'buy 3-ply',
        completed: true
    },
    {
        task: 'pick up Randall',
        completed: false
    },
    {
        task: 'watch Hey Arnold',
        completed: false
    },
    {
        task: 'Purchase a prarie dog',
        completed: true
    },
    {
        task: 'ride the tilt-a-whirl',
        completed: false
    },
];



test('filter for text', (assert) => {
    // Arrange
    const filter = {
        text: 'wat',
        completed: ''
    }; 
     // Act
    // now built in as custom assert
    const result = filterTodos(todos, filter);
     // Assert
    assert.deepEqual(result, [{
        task: 'watch Hey Arnold',
        completed: false
    }]);
}); 


