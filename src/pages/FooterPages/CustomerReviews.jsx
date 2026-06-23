import React, { useState } from "react";
import {
  Star,
  ThumbsUp,
  MessageCircle,
  Calendar,
  User,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CustomerReviews = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  const reviews = [
    {
      id: 1,
      name: "Rajesh Sharma",
      location: "Mumbai",
      rating: 5,
      date: "2024-03-15",
      title: "Excellent Banking Experience",
      review:
        "I have been banking with NCOSL for over 5 years. Their digital banking services are top-notch and customer support is always helpful. Highly recommended!",
      likes: 45,
      avatar:
        "https://ui-avatars.com/api/?name=Rajesh+Sharma&background=228296&color=fff",
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Ahmedabad",
      rating: 5,
      date: "2024-03-10",
      title: "Best Fixed Deposit Rates",
      review:
        "The FD interest rates are very competitive. The process of opening an FD was seamless and the customer service team explained everything clearly.",
      likes: 32,
      avatar:
        "https://ui-avatars.com/api/?name=Priya+Patel&background=6f3c85&color=fff",
    },
    {
      id: 3,
      name: "Amit Kumar",
      location: "Delhi",
      rating: 4,
      date: "2024-03-05",
      title: "Good Mobile Banking App",
      review:
        "The mobile app is user-friendly and feature-rich. UPI payments are instant. Sometimes the app takes time to load, but overall good experience.",
      likes: 28,
      avatar:
        "https://ui-avatars.com/api/?name=Amit+Kumar&background=228296&color=fff",
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "Hyderabad",
      rating: 5,
      date: "2024-03-01",
      title: "Quick Loan Approval",
      review:
        "Applied for a personal loan and got approval within 24 hours. The process was transparent with no hidden charges. Very satisfied.",
      likes: 56,
      avatar:
        "https://ui-avatars.com/api/?name=Sunita+Reddy&background=6f3c85&color=fff",
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      date: "2024-02-25",
      title: "Great Customer Support",
      review:
        "Had an issue with my debit card, called customer care and they resolved it immediately. Very professional and courteous staff.",
      likes: 23,
      avatar:
        "https://ui-avatars.com/api/?name=Vikram+Singh&background=228296&color=fff",
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "Pune",
      rating: 4,
      date: "2024-02-20",
      title: "Good Service",
      review:
        "Overall a good banking experience. The branch staff is helpful. Would love to see more features in the mobile app.",
      likes: 19,
      avatar:
        "https://ui-avatars.com/api/?name=Neha+Gupta&background=6f3c85&color=fff",
    },
    {
      id: 7,
      name: "Manish Jain",
      location: "Indore",
      rating: 5,
      date: "2024-02-18",
      title: "Trustworthy Bank",
      review:
        "I trust NCOSL with all my savings. Their fixed deposit schemes offer great returns. The online account management is very convenient.",
      likes: 41,
      avatar:
        "https://ui-avatars.com/api/?name=Manish+Jain&background=228296&color=fff",
    },
    {
      id: 8,
      name: "Kavita Desai",
      location: "Surat",
      rating: 5,
      date: "2024-02-15",
      title: "Excellent Service",
      review:
        "The home loan process was smooth and hassle-free. The interest rates are competitive and the staff guided us through every step.",
      likes: 37,
      avatar:
        "https://ui-avatars.com/api/?name=Kavita+Desai&background=6f3c85&color=fff",
    },
  ];

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);
  const totalReviews = reviews.length;
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach((r) => ratingCounts[r.rating - 1]++);

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((r) => r.rating === parseInt(filter));
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview,
  );
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] to-[#6f3c85] py-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              Customer Reviews
            </h1>
            <p className="mb-3 text-lg text-white/90">
              What our customers say about us
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#f9fafb"
            className="dark:fill-gray-800"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        {/* Rating Summary */}
        <div className="p-8 mb-12 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-[#228296] mb-2">
                {averageRating}
              </div>
              <div className="flex justify-center mb-2 md:justify-start">
                {renderStars(parseInt(averageRating))}
              </div>
              <p className="text-gray-600 dark:text-gray-200">
                Based on {totalReviews} reviews
              </p>
            </div>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="w-12 text-sm text-gray-800 dark:text-gray-200">
                    {rating} star
                  </span>
                  <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full ">
                    <div
                      className="h-full bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full"
                      style={{
                        width: `${(ratingCounts[rating - 1] / totalReviews) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-200">
                    {ratingCounts[rating - 1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter and Write Review */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex items-center gap-3 ">
            <Filter size={20} className="text-gray-500 dark:text-gray-200" />
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
          <button className="px-6 py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition">
            Write a Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 transition rounded-lg shadow-md dark:bg-gray-900 bg-slate-50 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {review.location}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    {renderStars(review.rating)}
                    <span className="text-xs text-gray-400 dark:text-gray-300">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
                {review.title}
              </h4>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-200">
                {review.review}
              </p>
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#228296] transition dark:text-gray-300">
                <ThumbsUp size={16} /> Helpful ({review.likes})
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 bg-white border rounded-lg disabled:opacity-50 hover:bg-gray-50"
            >
              <ChevronLeft size={20} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === i + 1
                    ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 bg-white border rounded-lg disabled:opacity-50 hover:bg-gray-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
