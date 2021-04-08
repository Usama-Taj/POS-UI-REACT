import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faCloud, faCog, faExternalLinkSquareAlt, faList, faSignal } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
      <a href="/#" className="navbar-band text-warning text-decoration-none">
        <h3>POS System</h3>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
          <li className="nav-item mx-2"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faCloud} size="2x" className="text-light" /></a></li>
          <li className="nav-item mx-2"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faSignal} size="2x" className="text-light" /></a></li>
          <li className="nav-item mx-2"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" className="text-light" /></a></li>
          <li className="nav-item mx-2"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faArchive} size="2x" className="text-light" /></a></li>
          <li className="nav-item mx-2"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faCog} size="2x" className="text-light" /></a></li>
          <li className="nav-item mx-2"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faList} size="2x" flip="horizontal" className="text-light" /></a></li>

          <li className="nav-item my-1">
            <select name="user_name" id="users" className="custom-select-lg mx-2 bg-dark text-warning w-100">
              <option value="Select" selected hidden={true} disabled={true}>Select</option>
              <option value="Name1">Name 1</option>
              <option value="Name2">Name 2</option>
            </select>
          </li>
        </ul>
      </div>
    </nav >
  );
}

export default Navbar;