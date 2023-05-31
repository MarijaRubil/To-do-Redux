// Åtgärder (actions)
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    text,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: {
    id,
  },
});

// Initialt tillstånd
const initialState = {
  todos: [],
};

// Reducer-funktion
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.text,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
