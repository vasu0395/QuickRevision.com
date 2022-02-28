import { Link } from "react-router-dom";
const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
  };
  const named = JSON.parse(localStorage.getItem("userData")).user.username;
  return (
    <>
      <nav className="navbar navbar-inverse navbar-expand-lg  navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">
          <img
            src="https://img.icons8.com/color/48/000000/address-book.png"
            alt="im"
          />
          QucikRevision.com
        </Link>
        <div className="navbar container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="motivation" className="nav-link">
                <i className="fab fa-angellist">&nbsp;Need Motivation</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-address-card">&nbsp;About</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="fas fa-id-badge">&nbsp;Contact</i>
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "10px",
                }}
              >
                👨‍💻 <span>{named}</span>
              </a>
            </li>
            <li>
              <Link
                to="/"
                onClick={handleLogout}
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "10px",
                }}
              >
                👨🏻‍💼 Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
