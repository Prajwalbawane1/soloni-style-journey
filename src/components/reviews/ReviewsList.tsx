
import { Card } from "@/components/ui/card";
import ReviewCard from "./ReviewCard";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  if (reviews.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-gray-500 text-center">No reviews yet. Be the first to review this product!</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </Card>
  );
};

export default ReviewsList;
