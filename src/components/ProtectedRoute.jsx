import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./context";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(myContext);

  if (isLoggedIn) {
    return children;
  } else {
    <Navigate to="/" />;
  }
};

export default ProtectedRoute;
