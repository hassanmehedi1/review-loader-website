import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from "../Review/Review";
import photo from '../../image/pexels-produtora-midtrack-3924709.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
   const [reviews,setReviews] = useReviews();
   return (
     <div className="grid justify-center mx-5">
       <div className="flex justify-between space-x-3 items-center font-sans font-semibold">
         <div className="text-6xl">
           <h1>Make Your Dream Come True</h1>
           <h2>
             <span className="text-blue-500">
               With Our Latest Sony A7 Camera
             </span>
           </h2>
           <div className="text-sm flex-wrap my-3">
             <p>
               The Sony Alpha 7 is a full-frame E-mount mirrorless camera. The
               A7 is very similar to its more expensive sibling (the A7R),
               except that it uses a 24 megapixel CMOS sensor with on-chip phase
               detection. The A7 twins are the smallest and lightest full-frame
               cameras on the market. While the cameras can use any E-mount
               lens, there will be a crop factor involved (unless you don't mind
               vignetting). Sony is producing a new line of FE-series lenses
               that take advantage of the larger sensor.
             </p>
           </div>
           <button className="text-xl font-serif font-semibold text-blue-500 border-4 rounded px-4 py-3 bg-gray-200 justify-center mx-6">
             Check Now
           </button>
         </div>
         <div className="">
           <img src={photo} alt="" />
         </div>
       </div>
       <br />
       <br />
       <div className="grid place-content-center">
         <h1 className="text-5xl font-semibold">Customer Reviews(3)</h1>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:-mx-40">
           {reviews.slice(0, 3).map((review) => (
             <Review key={review.id} review={review}></Review>
           ))}
         </div>
         <div>
           <Link className="text-xl font-semibold border-2 border-blue-500 flex place-content-center bg-white-400 text-green-600" to="/reviews">
             See All Reviews
           </Link>
         </div>
         <br />
       </div>
     </div>
   );
};

export default Home;