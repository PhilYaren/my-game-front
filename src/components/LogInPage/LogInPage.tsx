/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogInForm from "../LogInForm/LogInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

export default function LogInPage(): JSX.Element {
  const location: string = useLocation().pathname;
  console.log(location);
  return <div>{location === "/signup" ? <SignUpForm /> : <LogInForm />}</div>;
}
