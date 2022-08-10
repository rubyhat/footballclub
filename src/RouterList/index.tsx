import React from "react";
import { Route, Routes } from "react-router-dom";

const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));
const GameCreate = React.lazy(() => import("../pages/GameCreate"));

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
      <Route path="/register" element={<Register />} />
      <Route path="/no-auth" element={<NoAuth />} />
      <Route path="/g/new" element={<GameCreate />} />
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
