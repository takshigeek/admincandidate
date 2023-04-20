import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../../shared/AuthService";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Sidebar({ routes }) {
  const navigate = useNavigate();
  const [openSidenav, setOpenSidenav] = useState(true);
  const handleLogout = () => {
    navigate("auth");
    AuthService.unsetToken();
  };

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  return (
    <>
      <aside
        className={`${sidenavTypes.white} ${
          openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed  inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
      >
        <div className={`relative border-b border-white/20`}>
          <Link to="/" className="flex items-center gap-4 py-6 px-8">
            {/* <Avatar src={brandImg} size="sm" /> */}
            <Typography variant="h6" color={"blue-gray"}>
              {"BrandName"}
            </Typography>
          </Link>
          <IconButton
            variant="text"
            color="white"
            size="sm"
            ripple={false}
            className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            // onClick={() => setOpenSidenav(dispatch, false)}
          >
            {/* <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" /> */}
          </IconButton>
        </div>
        <div className="m-4">
          {routes.map(({ layout, name, pages }, key) => (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              {name && (
                <li className="mx-3.5 mt-4 mb-2">
                  <Typography
                    variant="small"
                    color={"blue-gray"}
                    className="font-black uppercase opacity-75"
                  >
                    {name}
                  </Typography>
                </li>
              )}
              {pages?.map(({ icon, name, path }) => (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "gradient" : "text"}
                        color={
                          // isActive
                          //   ? sidenavColor
                          //   : sidenavType === "dark"
                          //   ? "white"
                          // :
                          "blue-gray"
                        }
                        className="flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        {/* {icon} */}
                        <Typography
                          color="inherit"
                          className="font-medium capitalize"
                        >
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
          <div className="m-4">
            <Button
              variant="gradient"
              size="md"
              color="red"
              fullWidth
              className="mb-2"
              onClick={() => handleLogout()}
            >
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
