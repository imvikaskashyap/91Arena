"use client";
import { useState } from "react";
import { format } from "date-fns";
import ReplyModal from "./ReplyModel";
import { ChevronRight, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import ReplyPage from "./ReplyModel";

export default function ReviewPage() {
  const [reviews, setReviews] = useState([
    {
      id: 0,
      text: "Great product, highly recommend!",
      time: new Date(),
      replies: [],
      nickname: "User1",
      likes: 0,
      dislikes: 0,
      avatar: "/public/assets/png/logo-color.png",
    },
    {
      id: 1,
      text: "Not satisfied with the quality.",
      time: new Date(),
      replies: [],
      nickname: "User2",
      likes: 0,
      dislikes: 0,
      avatar: "/public/assets/png/logo-color.png",
    },
  ]);
  const [newReview, setNewReview] = useState("");
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);

  const handleAddReview = () => {
    setReviews([
      ...reviews,
      {
        id: reviews.length,
        text: newReview,
        time: new Date(),
        replies: [],
        nickname: "Anonymous",
        likes: 0,
        dislikes: 0,
        avatar: "/public/assets/png/logo-color.png",
      },
    ]);
    setNewReview("");
  };

 
  const handleAddReply = (reviewId, reply) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, replies: [...review.replies, reply] };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  const openReplyModal = (review) => {
    setCurrentReview(review);
    setShowReplyModal(true);
  };

  const handleLike = (reviewId) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, likes: review.likes + 1 };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  const handleDislike = (reviewId) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, dislikes: review.dislikes + 1 };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  return (
    <div className="my-4 w-full borderCss">
     {showReplyModal ? (
        <ReplyPage />
      ) : (
      <div className="bg-white p-6  ">
        <h1 className="text-2xl font-bold mb-4">Reviews</h1>
        <div >
          <textarea
            className="w-full p-2 border rounded mb-2"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write a review..."
          ></textarea>
          <div  className="flex items-end justify-end">
          <Button onClick={handleAddReview}>Add Review</Button>

          </div>
        </div>
        <div className="mt-6">
          {reviews.map((review) => (
            <div key={review.id} className="mb-4">
              <div className="p-4 border rounded bg-gray-50 flex items-start">
                <Image
                  src={review.avatar}
                  alt="Reviewer Avatar"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{review.nickname}</p>
                    <p className="text-sm text-gray-500">
                      {format(review.time, "PPPpp")}
                    </p>
                  </div>
                  <p>{review.text}</p>
                  <div className="mt-2 flex items-center justify-between space-x-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleLike(review.id)}
                        className="text-blue-500 flex items-center space-x-1 "
                      >
                        <ThumbsUp />
                        <span>{review.likes}</span>
                      </button>
                      <button
                        onClick={() => handleDislike(review.id)}
                        className="text-red-500 flex items-center space-x-1"
                      >
                        <ThumbsDown />
                        <span>{review.dislikes}</span>
                      </button>
                    </div>
                    <Button onClick={() => openReplyModal(review)}>Reply</Button>
                  </div>
                  <div className="mt-2">
                    {review.replies.map((reply, index) => (
                      <div
                        key={index}
                        className="ml-4 mt-2 p-2 border rounded bg-gray-200"
                      >
                        <p>{reply.text}</p>
                        <p className="text-sm text-gray-500">
                          {format(reply.time, "PPPpp")}
                        </p>
                        {reply.nickname && (
                          <p className="text-sm text-gray-500">
                            By {reply.nickname}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
        <Button className="underline" variant="link">View all Reviews</Button>
          
         <h5>Total Reviews</h5>
        </div>
      
      </div>
      )}
        </div>
  );
}
