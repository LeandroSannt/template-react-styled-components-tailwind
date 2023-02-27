import React from "react";
import { Navigate } from "react-router-dom";

import { PublicLayoutHome } from "../pages/_layouts/PublicLayoutHome";
import { PublicLayoutLogin } from "../pages/_layouts/PublicLayoutLogin";

type Props = {
  children?: React.ReactNode; // 👈️ type children
  home?: boolean;
};

const PublicRoute = ({ children, home }: Props) => {
  const c = true;

  // se estiver logado encaminha para home

  if (!c) {
    return <Navigate to="/dashboard" />;
  }

  if (home) {
    return <PublicLayoutHome>{children}</PublicLayoutHome>;
  }

  return <PublicLayoutLogin>{children}</PublicLayoutLogin>;
};

export default PublicRoute;
