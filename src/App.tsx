import React, { useReducer, useRef, useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import TodoComp from './components/TodoComp';
import { todo, todoState } from './model';
import { v4 as uuid } from 'uuid';

const initialState: todoState = {
  Todos: localStorage.getItem('Todos')
    ? JSON.parse(`${localStorage.getItem('Todos')}`)
    : [],
};

interface CxtAction {
  type: 'ADD_TODO' | 'REMOVE_TODO' | 'UPDATE_TODO';
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
      const removeItem = action.payload;
      const filteredItems = state.Todos.filter(
        (x: todo) => x.id !== removeItem.id
      );
      localStorage.setItem('Todos', JSON.stringify(filteredItems));
      return { ...state, Todos: [...filteredItems] };
    }
    case 'UPDATE_TODO': {
      const updateArr = state.Todos.map((x)=>x.id===action.payload.id?action.payload:x)
      localStorage.setItem('Todos', JSON.stringify(updateArr))
      return{
        ...state,Todo:[...updateArr]
      }
    }
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addtodo, setAddTodo] = useState<string>('');
  const [newName, setNewname] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state.Todos);
    if (addtodo) {
      const unique_id = uuid();
      const Id = unique_id.slice(0, 8);
      dispatch({
        type: 'ADD_TODO',
        payload: { id: Id, todoItem: addtodo, isDone: false },
      });
      setAddTodo('');
    }
  };

  const RemoveTodo = (todoRemove: todo) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: {
        id: todoRemove.id,
        todoItem: todoRemove.todoItem,
        isDone: todoRemove.isDone,
      },
    });
  };

  const handleUpdate = (todoUpdate: todo) => {
    const updatedTodo = {
      id: todoUpdate.id,
      todoItem: newName,
      isDone: todoUpdate.isDone,
    };
    dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
    console.log(updatedTodo);
  };

  const handleDone = (todoIsDone: todo) => {
    const update = {
      id: todoIsDone.id,
      todoItem: todoIsDone.todoItem,
      isDone: true,
    };

    dispatch({ type: 'UPDATE_TODO', payload: update });
    console.log(update);
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

      {state.Todos.map((Todo) => (
        <div key={Todo.id}>
          <TodoComp
            AllTodos={state.Todos}
            Todo={Todo}
            RemoveTodo={RemoveTodo}
            newName={newName}
            setNewname={setNewname}
            handleUpdate={handleUpdate}
            handleDone={handleDone}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
