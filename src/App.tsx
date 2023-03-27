import React, { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';


const App: React.FC = () => {
  const [todo,setTodo]=useState<string>("")
  return (
    <div className="bg-blue-500 w-full min-h-screen">
      <div className="flex items-center justify-center pt-4 heading-font text-3xl text-white">
        REACT TYPESCRIPT TODO APP
      </div>
      <div className='flex items-center justify-center'>
        <Inputfield todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default App;
