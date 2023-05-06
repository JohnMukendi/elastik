import React from "react";
import Sidebar from "./Sidebar";

function Layout({children}) {
  return (
    <div style={{transition:'1'}}>
      <Sidebar>

      {children}
      </Sidebar>
    </div>
  );
}

export default Layout;
