import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const currentPage = useLocation().pathname;

    return (
      <div>
        <h1>Briana Gil's React Portfolio</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
          
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"

            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"

            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"

            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
      </div>
    );

}
export default Nav;