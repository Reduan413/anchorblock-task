import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { selectedUser } = useContext(UserContext);
  const location = useLocation();
  if (!selectedUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
