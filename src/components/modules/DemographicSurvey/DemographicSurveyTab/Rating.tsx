import { useState } from "react";
import { Star } from "lucide-react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const max = 5;

  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <>
      <section className="flex items-center justify-between mt-4">
        <h2 className="text-lg font-semibold text-sc-dark-gray">Set Rating</h2>
      </section>

      <div className="flex items-center gap-6 p-4 rounded-lg bg-sc-primary/5 mt-2">
        {Array.from({ length: max }, (_, i) => i + 1).map((value) => (
          <div key={value} className="flex flex-col items-center w-full gap-2">
            <span className="text-gray-500">{value}</span>

            <Star
              className={`size-6 cursor-pointer transition-colors duration-150 ${
                value <= (hover || rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleClick(value)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Rating;
