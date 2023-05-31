import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoModule';

function TodoItem({ id, title, done }) {
  const dispatch = useDispatch();

  const handleToggleDone = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {title}
      </span>{' '}
      <button onClick={handleToggleDone}>{done ? 'Undo' : 'Done'}</button>{' '}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title">Title:</label>{' '}
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />{' '}
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          done={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
