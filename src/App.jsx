import { useState } from "react";
import CommentInput from "./components/CommentInput";
import CommentsDisplay from "./components/CommentsDisplay";

const App = () => {
  const [comment, setComment] = useState([]);
  return (
    <div>
      <CommentInput comment={comment} setComment={setComment}></CommentInput>
      <CommentsDisplay comment={comment}></CommentsDisplay>
    </div>
  );
};

export default App;
