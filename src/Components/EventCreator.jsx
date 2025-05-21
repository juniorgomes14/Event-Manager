import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from '../context/Authcontext'; 
{/* 
const navigation = [
  { name: "Dashboard", active: false },
  { name: "Eventos", active: true },
  { name: "Usuários", active: false },
  { name: "Configurações", active: false }
];
*/} 
export default function CreateEvent() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    price: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };
  const handChange = (e) =>{
    
  }
   const handleLogout = () => {
  setUser(null);


        // Redirecionar para Dashboard ou página protegida
 window.location.href = '/'; // Ajusta conforme teu projeto
};
  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token'); // pega o token salvo no login
    
  try {
        const form = new FormData();
            form.append('title', formData.title);
            form.append('description', formData.description);
            form.append('date', formData.date);
            form.append('location', formData.location);
            form.append('price', formData.price);
        if (image) {
          form.append('image', image); // <-- nome deve ser o mesmo do backend
        }

    const response = await fetch('http://localhost:3000/api/events/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}` // ❗ não defina Content-Type aqui!
      },
      body: form
    });


    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao criar evento.');
    }

    console.log('Evento criado:', data);
    alert('Evento criado com sucesso!');
  } catch (error) {
    console.error('Erro:', error.message);
    alert('Erro ao criar evento: ' + error.message);
  }
};
console.log(localStorage.getItem('token'))
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Sidebar */}
        <Sidebar onLogout={handleLogout}/>
        {/* 
        <aside className="hidden md:flex flex-col w-60 bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-600 py-8 px-4 min-h-screen shadow-lg text-white">
          <h2 className="text-2xl font-extrabold text-white tracking-wide mb-12 text-center">Painel</h2>
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                className={`px-4 py-2 text-left rounded-lg transition font-semibold ${item.active
                  ? "bg-white bg-opacity-20 text-white shadow-md"
                  : "hover:bg-white hover:bg-opacity-10 hover:text-blue-100"}`}
                disabled={item.active}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-10 text-center">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold hover:brightness-110 transition duration-300">Logout</button>
          </div>
        </aside>
        */}

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 flex flex-col gap-10">
          <h1 className="text-3xl text-center md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 mb-4">
            Criar Evento
          </h1>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md max-w-2xl w-full mx-auto">
            <div className="grid gap-6">
                <input
                type="file"
                accept="image/*"
                name="image"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => {
                  const file = e.target.files[0]
                  setImage(file ? URL.createObjectURL(file): undefined);
                }}
              />
              {setImage && (
                <image src={setImage}
                  width={200}
                  height={300}
                  alt = "insira ou arrasta a image"
                  className="max-h-[300] object-contain"
                />
              )}
              <input
                type="text"
                name="title"
                placeholder="Título do Evento"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Descrição"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="date"
                name="date"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Localização"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Preço"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.price}
                onChange={handleChange}
                required
              />


              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold hover:brightness-110 transition duration-300"
              >
                Criar Evento
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
