import React from "react";

function CommentList({ comments }) {
  return (
    <ul className="space-y-4 mt-4">
      {comments.map((comment) => (
        <li key={comment.id} className="border-b pb-2">
          <strong className="text-blue-600">{comment.author} :</strong>
          <span className="text-gray-800"> {comment.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
