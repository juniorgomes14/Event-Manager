import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/Authcontext'; 

export default function Dashtest() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    window.location.href = '/'; // ou: navigate('/')
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Sidebar onLogout={handleLogout} />
        
        <main className="flex-1 p-6 md:p-12 flex flex-col gap-10">
          {/* Conteúdo do dashboard aqui */}
        </main>
      </div>
    </>
  );
}
