import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Navbar from "../components/navbar";
import { RequireAuth } from "react-auth-kit";
import Home from "../components/home";

const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }
      >
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
