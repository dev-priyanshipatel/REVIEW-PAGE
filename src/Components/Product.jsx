const Product = () => {
  return (
    <>
      <section className="bg-grey">
        <div className="container">
          <p className="text-center py-3">
            <span className="grey-text-color">Home </span>/ Beauty & Cosmetics /
            Scalp Moisturizing Cream
          </p>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row gy-3">
            <div className="col-lg-6">
              <div className="overflow-hidden">
                <img
                  src="/images/product-img.webp"
                  alt="img"
                  className="img-fluid pro-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <h4 className="fw-semibold mb-3">$29.00</h4>
                <h1 className="mb-3">Scalp Moisturizing Cream</h1>
                <div className="review mb-3">
                  <span>
                    <i className="ri-star-fill text-warning"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill text-warning"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill text-warning"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill text-warning"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill text-warning"></i>
                  </span>
                  <span className="ms-3">(No reviews yet)</span>
                </div>
                <div className="mb-3">
                  <span className="fw-semibold">Quantity</span>
                </div>
                <div className="d-flex gap-1 mb-3 ">
                  <button className="px-4 py-2 h4 border-0 m-0">
                    <span className="me-5 h2">-</span>1
                    <span className="ms-5 h2">+</span>
                  </button>
                  <button className="w-75 border-color rounded-2 bg-white fw-semibold">
                    Add to cart
                  </button>
                </div>
                <div className="mb-4">
                  <button className="w-100 bg-dark text-white py-3 rounded-2 border-0">
                    Buy it now
                  </button>
                </div>
                <div className="d-flex gap-3 mb-4">
                  <div className="fw-semibold ">
                    <i className="ri-arrow-left-right-line me-2"></i>
                    <span>Compare</span>
                  </div>
                  <div className="fw-semibold ">
                    <i className="ri-star-line me-2"></i>
                    <span>Add to Wishlist</span>
                  </div>
                  <div className="fw-semibold ">
                    <i className="ri-share-line me-2"></i>
                    <span>Share</span>
                  </div>
                </div>
                <div className="mb-0">
                  <i className="ri-truck-line fs-5 me-1"></i>
                  <span className="fw-semibold">Estimated Delivery: </span>
                  <span className="grey-text-color fw-semibold">
                    December 22 - December 26
                  </span>
                </div>
                <div className="mb-0 border-bottom">
                  <i className="ri-box-3-line fs-5 me-1"></i>
                  <span className="fw-semibold">Free Shipping & Returns: </span>
                  <span className="grey-text-color fw-semibold">
                    On all orders over $75
                  </span>
                </div>
                <div className="mt-4">
                  <div className="d-flex mb-2">
                    <span className="fw-semibold">Vendor : </span>
                    <span className="grey-text-color ms-5"> Vendore 4</span>
                  </div>
                  <div className="d-flex mb-2">
                    <span className="fw-semibold">Collections:</span>
                    <span className="grey-text-color ms-4">
                      Beauty & cosmetic, Bestseller, Featured, New Arrivals,
                      Skincare, uder $40
                    </span>
                  </div>
                  <div className="d-flex mb-2">
                    <span className="fw-semibold">SKU : </span>
                    <span className="grey-text-color ms-5"> 501</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product