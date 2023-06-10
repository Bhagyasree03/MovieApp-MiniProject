import {HiOutlineSearch} from 'react-icons/hi'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="top-card">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/doatnw2iu/image/upload/v1686399381/Group_7399_gyukg0.png"
          className="movies-img"
          alt="website logo"
        />
      </Link>
      <Link to="/" className="header-text">
        Home
      </Link>
      {/* <Link className="header-text">Popular</Link> */}
    </div>
    <div className="top-card">
      <button testid="searchButton" type="button">
        <HiOutlineSearch className="search-icon" />
      </button>
      <img
        src="https://res.cloudinary.com/doatnw2iu/image/upload/v1686397228/Avatar_jajig8.png"
        className="icon"
        alt="profile"
      />
    </div>
  </nav>
)

export default Header
