import React from 'react';
import './App.css';
import Inputfield from './components/input';

const App: React.FC = () => {
  return (
    <div className="bg-blue-500 w-full min-h-screen">
      <div className="flex items-center justify-center pt-4 heading-font text-3xl text-white">
        REACT TYPESCRIPT TODO APP
      </div>
      <div className='flex items-center justify-center'>
        <Inputfield />
      </div>
    </div>
  );
};

export default App;
