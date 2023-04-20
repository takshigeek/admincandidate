import React from "react";
import { Route } from "react-router";

export const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (prop.collapse) {
      return getRoutes(prop.views);
    }
    if (
      prop.layout === "/auth" ||
      prop.layout === "/admin" ||
      prop.layout === "/candidate"
    ) {
      return <Route path={prop.path} key={key} element={prop.component} />;
    } else {
      return null;
    }
  });
};
