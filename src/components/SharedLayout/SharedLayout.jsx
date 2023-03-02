import Header from "../Header/HeaderComp";
import { Outlet } from "react-router";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
        </Suspense>
        
    </>
  );
};

export default SharedLayout;
