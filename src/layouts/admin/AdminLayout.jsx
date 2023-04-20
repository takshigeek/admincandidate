import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AdminRoutes } from "../../routes";
import { getRoutes } from "../Common";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default class AdminLayout extends Component {
  render() {
    return (
      <div className="w-full h-screen">
        <div className="w-[288px]">
          <Sidebar routes={AdminRoutes} />
        </div>
        <div className="ml-[305px] p-[16px]">
          <Routes>
            {getRoutes(AdminRoutes)}
            <Route
              path="*"
              element={<Navigate to="/auth/login" replace={true} />}
            />
          </Routes>
        </div>
      </div>

      // <div className="wrapper">
      //     <Header />
      //     <Sidebar />
      //     <div className="content-wrapper">
      //         <Routes>
      //             {getRoutes(AdminRoutes)}
      //             <Route path='*' element={<Navigate to='/auth/login' replace={true} />} />
      //         </Routes>
      //     </div>
      //     <Footer />
      // </div>
    );
  }
}
