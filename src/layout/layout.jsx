import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<h2>Loading..</h2>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
