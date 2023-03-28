import React, { useReducer, useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import { todo, todoState } from './model';

const initialState: todoState = {
  Todos: localStorage.getItem('Todos')
    ? JSON.parse(`${localStorage.getItem('Todos')}`)
    : [],
};
interface CxtAction {
  type: 'ADD_TODO' | 'REMOVE_TODO';
  payload: todo;
}

const reducer = (state: todoState, action: CxtAction) => {
  switch (action.type) {
    case 'ADD_TODO': {
      let newTodos = [...state.Todos, action.payload];
      localStorage.setItem('Todos', JSON.stringify(newTodos));
      return { ...state, Todos: newTodos };
    }
    case 'REMOVE_TODO': {
      const removeItem: todo = action.payload;
      const filteredItems = state.Todos.filter(
        (x: todo) => x.id !== removeItem.id
      );
      localStorage.setItem('Todos', JSON.stringify(filteredItems));
      return { ...state, Todos: filteredItems };
    }
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addtodo, setAddTodo] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state.Todos);
    if (addtodo) {
      const Id = state.Todos.length + 1;
      dispatch({
        type: 'ADD_TODO',
        payload: { id: Id, todoItem: addtodo, isDone: false },
      });
      setAddTodo('');
    }
  };
  return (
    <div className="bg-blue-500 w-full min-h-screen">
      <div className="flex items-center justify-center pt-4 heading-font text-3xl text-white">
        REACT TYPESCRIPT TODO APP
      </div>
      <div className="flex items-center justify-center">
        <Inputfield
          addtodo={addtodo}
          setAddTodo={setAddTodo}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
