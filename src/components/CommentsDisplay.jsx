const CommentsDisplay = ({ comment }) => {
  return (
    <div className="w-1/2 mx-auto p-4 mt-4 border border-red-400">
      <p>Comments:</p>
      {comment.map((c, index) => (
        <li key={index}>{c}</li>
      ))}
    </div>
  );
};

export default CommentsDisplay;
