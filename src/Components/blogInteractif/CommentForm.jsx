import React, { useState } from "react";

function CommentForm({ addComment }) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && text) {
      addComment(author, text); // Appel de la fonction addComment
      setAuthor("");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4 flex flex-col ">
      <input
        type="text"
        placeholder="Votre nom"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full h-1/2 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
      />
      <textarea
        placeholder="Votre commentaire"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="px-3 text-sm py-2 bg-cyan-300  text-white rounded-lg hover:bg-cyan-600 focus:outline-none"
      >
        Ajouter un commentaire
      </button>
    </form>
  );
}

export default CommentForm;
