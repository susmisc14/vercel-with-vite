import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}
