import { lazy, Suspense } from "react";
import React from "react";

const Login = lazy(() => import("./pages/auth/login.page"));
const Dashboard = lazy(() => import("./pages/admin/dashboard.page"));
const Home = lazy(() => import("./pages/candidate/home.page"));

export const AuthRoutes = [
  {
    path: "/login",
    layout: "/auth",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: <Login />,
  },
];

export const AdminRoutes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: <Dashboard />,
  },
];

export const CandidateRoutes = [
  {
    path: "/home",
    layout: "/candidate",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: (
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "calc(100vh - 112px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading...
          </div>
        }
      >
        <Home />
      </Suspense>
    ),
  },
];
