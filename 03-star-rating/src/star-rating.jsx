import { useState } from "react";
import { Star } from "lucide-react";

// FFD700

export function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="text-center p-5">
      <h1>Star Rating</h1>

      {/** Rating Stars here */}
      <div className="flex justify-center mt-2 gap-1">
        {Array.from({ length: 5 }).map((star, index) => (
          <Star
            key={index}
            onClick={() => setRating(index + 1)}
            fill={rating > index ? "#FFD700" : "#CCCCCC"}
            color={rating > index ? "#FFD700" : "#CCCCCC"}
          />
        ))}
      </div>

      <div className="mt-4 space-y-1">
        <p>Current Rating: {rating}</p>
        <button
          onClick={() => setRating(0)}
          className="rounded border px-2 py-0.5 cursor-pointer"
        >
          Reset Rating
        </button>
      </div>
    </div>
  );
}
