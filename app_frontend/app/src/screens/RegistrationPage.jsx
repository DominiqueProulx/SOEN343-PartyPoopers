import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import RegistrationBox from "../components/RegistrationBox";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      <Header/>

      <RegistrationBox/>
      

      {/* Footer */}
      <Footer/>
    </div>
  );
}