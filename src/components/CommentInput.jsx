import { useState } from "react";

const CommentInput = ({ comment, setComment }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim()) {
      setComment([...comment, inputValue]);
      setInputValue(""); // Clear the input field after adding the comment
    }
    console.log(comment);
  };

  return (
    <div className="w-4/5 md:w-2/5 border-2 border-yellow-400 flex justify-around mx-auto p-4">
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        className="md:w-3/4 focus:outline-none border-b-2 border-gray-400"
        placeholder="Enter your Comment here.."
      />
      <button
        onClick={handleClick}
        className="w-24 bg-yellow-400 border-2 border-gray-800 rounded-xl p-2"
      >
        Enter
      </button>
    </div>
  );
};

export default CommentInput;
