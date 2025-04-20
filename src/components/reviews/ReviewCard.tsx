
import { Star } from "lucide-react";

interface ReviewCardProps {
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard = ({ author, rating, comment, date }: ReviewCardProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating ? "text-soloni-gold" : "text-gray-300"
              }`}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default ReviewCard;
