import React from 'react';
interface Props {
    todo:String;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
}
const Inputfield:React.FC<Props> = ({todo ,setTodo}:Props) => {
  return (
    <div className=" flex items-center justify-center w-full pt-4">
      <div className=" relative  w-[40%] h-14 flex items-center">
        <input onChange={(e)=>setTodo(e.target.value)} className="w-[90%]  h-14  rounded-full px-4 input " />
        <div className='absolute right-16'>
          <button className="bg-blue-500 w-10 h-10 rounded-full submit_btn ">GO</button>
        </div>
      </div>
    </div>
  );
};

export default Inputfield;
