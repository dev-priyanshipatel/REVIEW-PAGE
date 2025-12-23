import HeaderLogo from "./HeaderLogo"

const Footer = () => {
  return (
    <footer className="pt-lg-5 pt-5 pb-5 footer-bg">
      <div className="container mt-md-2 mt-lg-3">
        <div className="row mb-md-5 mb-4 gy-3">
          <div className="col-lg-3">
            <div>
              <HeaderLogo />
              <p className=" mt-3 grey-text-color  mb-3">
                The agency with extensive experience that creates marketing
                strategies for B2B and B2C companies.
              </p>
              <div className="d-flex">
                <a
                  href="#"
                  className="btn rounded-circle ms-3 mt-3  text-black"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="#"
                  className="btn rounded-circle ms-3 mt-3  text-black"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="#"
                  className="btn rounded-circle ms-3 mt-3  text-black"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h3 className="fw-semibold">Company</h3>
              <p className="grey-text-color fw-semibold mb-2">
                Find a location nearest you. See
                <span className="text-dark">Our Stores</span>
              </p>
              <p className="fw-semibold fw-semibold mb-2">
                +391 (0)35 2568 4593
              </p>
              <p className="grey-text-color mb-2">hello@domain.com</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h3 className="fw-semibold">Useful Links</h3>
              <ul className="p-0 grey-text-color">
                <li className="list-unstyled mb-2 fw-semibold">New Products</li>
                <li className="list-unstyled mb-2 fw-semibold">Best Sellers</li>
                <li className="list-unstyled mb-2 fw-semibold">
                  Bundle & save
                </li>
                <li className="list-unstyled mb-2 fw-semibold">
                  Online Gift Card
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="fw-semibold">Information</h3>
            <div>
              <ul className="p-0">
                <li className="list-unstyled mb-2 fw-semibold">
                  Start A Return
                </li>
                <li className="list-unstyled mb-2  fw-semibold">Contact Us</li>
                <li className="list-unstyled mb-2  fw-semibold">
                  Shipping FAQ
                </li>
                <li className="list-unstyled mb-2  fw-semibold">
                  Terms & Conditions
                </li>
                <li className="list-unstyled mb-2  fw-semibold">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer