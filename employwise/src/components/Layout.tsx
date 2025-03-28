import React from "react";
import { Outlet} from "react-router-dom";

const Layout: React.FC = () => {


  return (
    <div>
      <main className="p-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
