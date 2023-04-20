import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import AdminLayout from "./layouts/admin/AdminLayout";
import CandidateLayout from "./layouts/candidate/CandidateLayout";
import AuthService from "./shared/AuthService";

function GuardedRoute({ ...rest }) {
  return AuthService.getToken() ? (
    AuthService.getUser().user_type === "admin" ? (
      <AdminLayout {...rest} />
    ) : (
      <CandidateLayout {...rest} />
    )
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default GuardedRoute;
