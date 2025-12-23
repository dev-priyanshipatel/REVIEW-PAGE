import HeaderLogo from "./HeaderLogo"
import Navbar from "./Navbar"
import Icons from "./Icons"

const Header = () => {
  return (
    <div className="header container d-flex justify-content-between align-items-center py-3">
            <HeaderLogo/>
            <Navbar/>
            <Icons />
    </div>
  )
}

export default Header