import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../shared/AuthService";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignup = () => {

  };

  return (
    <div className="flex w-full justify-center items-center h-[100dvh]">
      <Card color="transparent" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        {/* <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography> */}
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          {/* <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
               className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        /> */}
          <Button className="mt-6" onClick={() => handleSignup()} fullWidth>
            Sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
          Already have accounnt?{" "}
            <div
              onClick={() => {
                navigate("auth");
              }}
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Login
            </div>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
