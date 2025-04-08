import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import RegistrationBox from "../components/RegistrationBox";
import Logo from "../components/Logo";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      <div className="w-16 h-16 flex items-center justify-center" style={{ width: '500px' }}>
          <Logo className="w-full h-full object-contain" />
        </div>


      <RegistrationBox/>
      

      {/* Footer */}
    </div>
  );
}