import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./styles";
const DashboardLayout: React.FC = () => {
  return (
    <Container>
      <h1 className="text-red-400">
        <Outlet />
      </h1>
    </Container>
  );
};
export { DashboardLayout };
