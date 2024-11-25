import React from "react";
import CommentSection from "./CommentSection";

function ProductCard({ product }) {
  const thumbnail = `/images/${product.thumbnail}`;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
      <div className="flex justify-center">
        <img
          src={thumbnail}
          alt={product.title}
          className="w-1/2 object-cover "
        />
      </div>
      <div className="p-4 ">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-green-400">Prix : {product.price} €</p>
        <CommentSection productId={product.id} />
      </div>
    </div>
  );
}

export default ProductCard;
