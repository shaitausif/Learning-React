import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { ToastContainer, toast } from 'react-toastify';


const Addtodo = () => {
  const [input, setinput] = useState("");
  const disptach = useDispatch();

  const addToHandler = (e) => {
    e.preventDefault();
    if (input.length > 3) {
      disptach(addTodo(input));
      setinput("");
    } else {
      toast.error('Increase the size of todo', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
      <form onSubmit={addToHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-700 ease-in-out"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default Addtodo;
