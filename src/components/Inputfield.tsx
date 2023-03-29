import React from 'react';
interface Props {
  addtodo: string;
  setAddTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}
const Inputfield: React.FC<Props> = ({ addtodo, setAddTodo, handleSubmit }) => {
  return (
    <div className=" flex items-center justify-center w-full pt-4">
      <div className=" relative  h-14 flex items-center mx-auto w-[40%] ">
        <input
          value={addtodo}
          onChange={(e) => setAddTodo(e.target.value)}
          className="w-[100%] h-14 rounded-full px-4 input "
        />
        <div className="absolute right-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 w-10 h-10 rounded-full submit_btn "
          >
            GO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputfield;
