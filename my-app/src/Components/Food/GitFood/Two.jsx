import React from 'react';


function FoodCard({ food }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img
        src={food.image || "https://via.placeholder.com/300x200.png?text=Food+Image"}
        alt={food.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{food.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{food.description}</p>
      <p className="font-bold mt-2">${food.price}</p>
      <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
