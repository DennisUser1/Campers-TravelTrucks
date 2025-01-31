import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "@/components";
import { Header } from "@/components/Header/Header";
import "./App.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="container">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Layout;
