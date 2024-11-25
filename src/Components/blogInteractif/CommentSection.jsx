import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function CommentSection({ productId }) {
  const [comments, setComments] = useState([]);

  // Ajouter un commentaire
  const addComment = (author, text) => {
    const newComment = {
      id: comments.length + 1,
      author,
      text,
      productId,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-gray-700">Commentaires</h3>
      <CommentList comments={comments} />
      <CommentForm addComment={addComment} />
    </div>
  );
}

export default CommentSection;
