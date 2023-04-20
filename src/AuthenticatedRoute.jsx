import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import AuthLayout from "./layouts/auth/AuthLayout";
import AuthService from "./shared/AuthService";
import React from "react";

function AuthenticatedRoute({ ...rest }) {
  return AuthService.getToken() ? (
    AuthService.getUser().user_type === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/candidate/home" />
    )
  ) : (
    <AuthLayout {...rest} />
  );
}

export default AuthenticatedRoute;
