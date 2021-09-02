import React from "react";
import "../Components/payment/Panel.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Panel() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/signIn";
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="dropdown">
          <i className="far fa-user-circle fa-2x"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/Profile">
            <i class="fas fa-user-alt"></i>
            Profile
          </Dropdown.Item>
          <Dropdown.Item href="/Dashboard">
            <i class="fas fa-columns"></i> Dashboard
          </Dropdown.Item>
          <Dropdown.Item href="/Checkout">
            <i class="fas fa-shopping-cart"></i> Panel
          </Dropdown.Item>
          <Dropdown.Item href="/" onClick={handleLogout}>
            <i class="fas fa-sign-out-alt"></i> Sign out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
