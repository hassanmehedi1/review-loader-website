import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
   const [reviews,setReviews] = useReviews();
   return (
     <div className="grid grid-cols-2 md:grid-cols-3 place-content-center ml-10">
       {reviews.map((review) => (
         <Review 
         key={review.id} 
         review={review}></Review>
       ))}
     </div>
   );
};

export default Reviews;