import { Shopper } from "pages/Dashboard/Shopper";
import { HomeLayout } from "pages/Home";
import { Home } from "pages/Home/Home";
import { DashboardLayout } from "pages/Dashboard";
import { LoginLayout } from "pages/Login";
import { Login } from "pages/Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute home>
              <HomeLayout />
            </PublicRoute>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginLayout />
            </PublicRoute>
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="shopper" element={<Shopper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
