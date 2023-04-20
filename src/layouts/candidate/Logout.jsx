import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router";
import AuthService from "../../shared/AuthService";
function Logout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("auth");
    AuthService.unsetToken();
    localStorage.clear();
  };

  return <div>Logout</div>;
}
export default Logout;
