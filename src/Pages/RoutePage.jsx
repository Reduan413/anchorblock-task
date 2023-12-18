import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import Users from "./Users";
import RequireAuth from "./RequireAuth";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default RoutePage;
