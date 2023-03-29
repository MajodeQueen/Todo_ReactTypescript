import React, { useState } from 'react';
import { todo } from '../model';
import { CgRemove } from 'react-icons/cg';
import { GiCheckMark } from 'react-icons/gi';
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai';
interface Props {
  Todo: todo;
  AllTodos: todo[];
  RemoveTodo: (todoRemove: todo) => any;
  setNewname:Function
  newName: string ;
  handleUpdate:(todoUpdate:todo) =>any;
  handleDone:(todoIsDone:todo)=>any
}

const TodoComp: React.FC<Props> = ({
  Todo,
  AllTodos,
  RemoveTodo,
  setNewname,
  newName,
  handleUpdate,
  handleDone
  
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const InputOpen = () => {
    setOpen(!open)
    setNewname(Todo.todoItem)
  };

  const hanleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setNewname(e.target.value)
  }

  return (
    <div className="flex items-center justify-center w-full pt-4 ">
      <div className="bg-yellow-500 flex items-center justify-between w-[50%] h-14 px-2 rounded-md shadow-md">
        <div>
          {open ? (
            <form onSubmit={()=>handleUpdate(Todo)}>
              <input value={newName} onChange={hanleInput} />
            </form>
          ) : (
            <p className="fontStyle text-[20px]">{Todo.todoItem}</p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <AiFillEdit onClick={InputOpen} />
          <AiTwotoneDelete onClick={() => RemoveTodo(Todo)} />
          {Todo.isDone ? <GiCheckMark /> : <CgRemove onClick={()=>handleDone(Todo)} />}
        </div>
      </div>
    </div>
  );
};

export default TodoComp;
