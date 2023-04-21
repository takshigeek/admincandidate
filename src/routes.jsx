import { lazy, Suspense } from "react";
import React from "react";

const Login = lazy(() => import("./pages/auth/login.page"));
const SignUp = lazy(() => import("./pages/auth/signup.page"));
const Dashboard = lazy(() => import("./pages/admin/dashboard.page"));
const Home = lazy(() => import("./pages/candidate/home.page"));

export const AuthRoutes = [
  {
    path: "/login",
    layout: "/auth",
    name: "Login",
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
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    layout: "/auth",
    name: "Login",
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
        <SignUp />
      </Suspense>
    ),
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
    layout: "/user",
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
