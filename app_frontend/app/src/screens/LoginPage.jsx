import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginBox from "../components/LoginBox"
export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
      <Header/>
        <LoginBox/>


      {/* Footer */}
      <Footer/>
    </div>
  );
}