import React from "react";
import "../Components/Language.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Panel() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="Lan">
          {" "}
          <i className="fas fa-flag-usa fa-2x"></i> EN
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">
            <i class="fas fa-flag-usa"> </i>
            En
          </Dropdown.Item>
          <Dropdown.Item href="/HomeFr">
            {" "}
            <i class="fas fa-bread-slice"></i>Fr
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
