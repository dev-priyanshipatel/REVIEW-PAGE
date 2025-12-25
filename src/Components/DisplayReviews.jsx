const DisplayReviews = ({reviews}) => {

   const getRating = (rating) => {
     switch (Number(rating)) {
       case 1:
         return <i className="ri-star-s-fill"></i>;
       case 2:
         return (
           <>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
           </>
         );
       case 3:
         return (
           <>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
           </>
         );
       case 4:
         return (
           <>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
           </>
         );
       case 5:
         return (
           <>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
             <i className="ri-star-s-fill"></i>
           </>
         );
     }
   };
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Customer Reviews</h2>

      <div className="row">
        {reviews.map((review) => (
          <div className="col-md-4 mb-3" key={review.id}>
            <div className="card p-3 shadow-sm h-100">
              <h5 className="mb-2">{review.subject}</h5>

              <p className="grey-text-color">{review.comment}</p>

              <div className="small grey-text-color  mt-2">
                <strong>{review.name}</strong>
                <span className="text-warning"> {getRating(review.rating)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayReviews