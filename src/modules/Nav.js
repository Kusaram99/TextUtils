
import React from 'react'
import PropTypes from 'prop-types'
import Themes from './Theme';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" ffaria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              {/* <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link> */}
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="/about">{props.about}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          <div>
            {<Themes bgTheme={props.mode} />}
          </div>
          <div className='form-check form-switch'>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.darkMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'set Black mode' : 'set Light mode'}</label>
          </div>
        </div>
      </div>
    </nav>);
}

Navbar.propTypes = {
  title: PropTypes.string,
  // contact: PropTypes.string.isRequired

}

Navbar.defaultProps = {
  title: "us_TextUtils form KUSHA",
  home: "Home"
}



// export default;