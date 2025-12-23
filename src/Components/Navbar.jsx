const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-nav py-3">
        <li className="nav-link p-3">
          <a href="#" className="text-decoration-none text-dark line-hight fw-medium">
            Home<i className="ri-arrow-down-s-line ps-2"></i>
          </a>
        </li>
        <li className="nav-link p-3">
          <a href="#" className="text-decoration-none text-dark line-hight fw-medium">
            Shop<i className="ri-arrow-down-s-line ps-2"></i>
          </a>
        </li>
        <li className="nav-link p-3">
          <a href="#" className="text-decoration-none text-dark line-hight fw-medium">
            Product<i className="ri-arrow-down-s-line ps-2"></i>
          </a>
        </li>
        <li className="nav-link p-3">
          <a href="#" className="text-decoration-none text-dark line-hight fw-medium">
            Pages<i className="ri-arrow-down-s-line ps-2"></i>
          </a>
        </li>
        <li className="nav-link p-3">
          <a href="#" className="text-decoration-none text-dark line-hight fw-medium">
            Blog<i className="ri-arrow-down-s-line ps-2"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar