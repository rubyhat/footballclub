import React from "react";
import { Route, Routes } from "react-router-dom";

// const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));

const RouterList = () => {
  const isAuth = true;

  const Testt = () => {
    return <div>testing</div>;
  };
  const NoAuth = () => {
    return <div> no auth</div>;
  };
  const Page404 = () => {
    return <div> page 404</div>;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/reg" element={<Register />} /> */}
      <Route path="/no-auth" element={<NoAuth />} />
      <Route
        path="/test"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Testt />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RouterList;
