import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./styles";

type Props = {
  children?: React.ReactNode;
};
function HomeLayout({ children }: Props) {
  return (
    <Container>
      <div className="min-h-full flex">
        <Outlet />
      </div>
    </Container>
  );
}
export { HomeLayout };
