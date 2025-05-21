import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/Authcontext'; 
import Sidebar from "../Components/Sidebar";





export default function Dashboard() {
  const { setUser } = useAuth();
  const navigate =useNavigate()

  const handleLogout = () => {
  setUser(null);
        // Redirecionar para Dashboard ou página protegida
 window.location.href = '/'; // Ajusta conforme teu projeto
};
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Sidebar */}
        <Sidebar onLogout={handleLogout}/>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 flex flex-col gap-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 mb-2">
            Dashboard Principal
          </h1>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-700 mb-2">24</span>
              <span className="text-gray-700 mb-1 font-semibold">Eventos Ativos</span>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold hover:brightness-110 transition duration-300" onClick={navigate("/events")}>Ver eventos</button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-700 mb-2">158</span>
              <span className="text-gray-700 mb-1 font-semibold">Usuários</span>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold hover:brightness-110 transition duration-300">Ver usuários</button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-700 mb-2">3</span>
              <span className="text-gray-700 mb-1 font-semibold">Eventos Pendentes</span>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold hover:brightness-110 transition duration-300">Rever eventos</button>
            </div>
          </div>

          {/* Seção estendida do dashboard (extra) */}
          <div className="hidden md:block bg-white rounded-xl shadow p-8 mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Resumo</h2>
            <p className="text-gray-500">Aqui você pode adicionar gráficos, tabelas ou outras informações importantes do painel.</p>
          </div>
        </main>
      </div>
    </>
  );
}
