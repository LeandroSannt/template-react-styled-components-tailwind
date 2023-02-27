import { Navigate } from "react-router-dom";

import SidebarLayout from "../pages/_layouts/Sidebar";

type Props = {
  children?: JSX.Element; // 👈️ type children
};

const PrivateRoute = ({ children }: Props) => {
  const page = false;

  //se não tiver logado leva para login

  if (page) {
    return <Navigate to="/" />;
  }

  return <SidebarLayout>{children}</SidebarLayout>;
};

export default PrivateRoute;
