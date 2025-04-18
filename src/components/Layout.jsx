import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <div className="min-h-screen py-4 ">
      <Navbar />

      {/* Page content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
