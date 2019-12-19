import React from "react";

const Navbar = () => {
  return (
    <header className="nav-bar">
      <img
        className="logo-docplanner"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="Docplanner Group"
      />
      <ul className="main-menu">
        <li>
          <a id="about-us" href="#">
            About us
          </a>
        </li>
        <li>
          <a className="career" href="#">
            Career
          </a>
        </li>
        <li className="dropdown-link">
          <a className="career" href="#">
            Departements
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="https://www.docplanner.com/department?dep=marketing">
                Marketing & PR
              </a>
            </li>
            <li>
              <a href="https://www.docplanner.com/department?dep=customer">
                Customer Success & Sales
              </a>
            </li>
            <li>
              <a href="https://www.docplanner.com/department?dep=it">
                IT, Product, Design & UX
              </a>
            </li>
            <li>
              <a href="https://www.docplanner.com/department?dep=finance">
                Finance & Administration
              </a>
            </li>
            <li>
              <a href="https://www.docplanner.com/department?dep=hr">
                HR & more
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};
export default Navbar