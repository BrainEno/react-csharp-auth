import React from "react";
import NavMenu from "./NavMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavMenu />
      <div>{children}</div>
    </>
  );
};

export default Layout;
