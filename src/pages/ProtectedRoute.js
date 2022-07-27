import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  //   if everything is correct go to children (Dashboard)

  return children;
};

export default ProtectedRoute;
