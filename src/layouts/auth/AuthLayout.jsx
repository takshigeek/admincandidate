import React, { Component } from "react";
import { Routes, useRoutes } from "react-router";
import { Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../../routes";
import { getRoutes } from "../Common";
const AuthLayout = ({}) => {
  return (
    <>
      <Routes>
        {getRoutes(AuthRoutes)}
        <Route path="*" element={<Navigate to="login" replace={true} />} />
      </Routes>
    </>
  );
};

export default AuthLayout;
