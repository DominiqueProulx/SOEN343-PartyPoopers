import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardGrid from "../components/DashboardGrid"
export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
      <Header/>
        <DashboardGrid/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
