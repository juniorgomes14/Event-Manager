import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Eventos", path: "/events/create" },
  { name: "Usuários", path: "/profile" },
  { name: "Configurações", path: "/config" },
];

export default function Sidebar({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-60 bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-600 py-8 px-4 min-h-screen shadow-lg text-white">
      <h2 className="text-2xl font-extrabold text-white tracking-wide mb-12 text-center">Painel</h2>
      <nav className="flex flex-col gap-2">
        {navigation.map((item) => (
          <button
            key={item.name}
            className={`px-4 py-2 text-left rounded-lg transition font-semibold ${
              location.pathname === item.path
                ? "bg-white bg-opacity-20 text-white shadow-md"
                : "hover:bg-white hover:bg-opacity-10 hover:text-blue-100"
            }`}
            onClick={() => navigate(item.path)}
            disabled={location.pathname === item.path}
          >
            {item.name}
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-10 text-center">
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold hover:brightness-110 transition duration-300"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
