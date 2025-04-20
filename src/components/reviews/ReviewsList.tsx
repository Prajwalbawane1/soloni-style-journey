
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "highest" | "lowest">("newest");
  
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOrder === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortOrder === "highest") {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });

  if (reviews.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-gray-500 text-center">No reviews yet. Be the first to review this product!</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex justify-end mb-4 space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setSortOrder("newest")}
          className={sortOrder === "newest" ? "bg-soloni-beige" : ""}
        >
          Newest <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setSortOrder("oldest")}
          className={sortOrder === "oldest" ? "bg-soloni-beige" : ""}
        >
          Oldest <ChevronUp className="ml-1 h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setSortOrder("highest")}
          className={sortOrder === "highest" ? "bg-soloni-beige" : ""}
        >
          Highest Rating <ChevronUp className="ml-1 h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setSortOrder("lowest")}
          className={sortOrder === "lowest" ? "bg-soloni-beige" : ""}
        >
          Lowest Rating <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-2">
        {sortedReviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </Card>
  );
};

export default ReviewsList;
