import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import { CandidateRoutes } from "../../routes";
import { getRoutes } from "../Common";
import Footer from "./Footer";
import Header from "./Header";

export default class CandidateLayout extends Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />

        <Routes>
          {getRoutes(CandidateRoutes)}
          <Route
            path="*"
            element={<Navigate to="/auth/login" replace={true} />}
          />
        </Routes>

        <Footer />
      </div>
    );
  }
}
