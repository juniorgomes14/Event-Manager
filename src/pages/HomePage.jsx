import React, { useState } from "react";
import Navbar from "../Components/Navbar";



// Dados mockados de eventos
const mockEvents = [
  {
    id: 1,
    title: "Concerto de Rock",
    category: "Concertos",
    city: "Santa Maria",
    date: "2025-06-08",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Teatro Infantil",
    category: "Teatro",
    city: "Porto",
    date: "2025-06-16",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Conferência Tech",
    category: "Conferências",
    city: "Praia",
    date: "2025-07-02",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Jogo de Futebol",
    category: "Desportos",
    city: "Mindelo",
    date: "2025-06-13",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
];

const categorias = ["Todos", "Concertos", "Desportos", "Teatro", "Conferências"];
const cidades = ["Todas", "Mindelo", "Porto", "Praia","Santa Maria"];

function filterEvents(events, search, categoria, cidade, date) {
  return events.filter((event) => {
    const matchSearch =
      !search || event.title.toLowerCase().includes(search.toLowerCase());
    const matchCategoria = categoria === "Todos" || event.category === categoria;
    const matchCidade = cidade === "Todas" || event.city === cidade;
    const matchDate = !date || event.date === date;
    return matchSearch && matchCategoria && matchCidade && matchDate;
  });
}


export default function HomePage() {
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [cidade, setCidade] = useState("Todas");
  const [date, setDate] = useState("");

  const filteredEvents = filterEvents(
    mockEvents,
    search,
    categoria,
    cidade,
    date
  );
  const featuredEvents = mockEvents.filter((e) => e.featured);

  return (
    <>
       <Navbar />
      <main className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen pb-10">
        <section className="max-w-6xl mx-auto py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 mb-6 text-center">
            Encontre e reserve eventos incríveis
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Pesquise, filtre e reserve concertos, desportos, teatro e muito mais.
          </p>

          {/* Destaques */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Eventos em Destaque
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

              {featuredEvents.map((event) => (
                <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-lg hover:shadow-2xl transition" key={event.id}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-40 w-full object-cover"
                  />

                  
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{event.category} - {event.city}</div>
                    <h3 className="font-bold text-lg text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-xl px-6 py-5 shadow mb-8 flex flex-col md:flex-row md:gap-4 gap-2 items-center justify-between">
            <input
              type="text"
              className="border p-2 rounded-md flex-1 min-w-[150px]"
              placeholder="Pesquisar eventos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="border p-2 rounded-md"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              className="border p-2 rounded-md"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            >
              {cidades.map((cidade) => (
                <option key={cidade} value={cidade}>{cidade}</option>
              ))}
            </select>
            <input
              type="date"
              className="border p-2 rounded-md min-w-[140px]"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Lista de Eventos */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Eventos Disponíveis</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredEvents.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">
                Nenhum evento encontrado.
              </div>
            ) : (
              filteredEvents.map((event) => (
                <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-lg hover:shadow-2xl transition" key={event.id}>
                  <img src={event.image} alt={event.title} className="h-36 w-full object-cover" />
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{event.category} - {event.city}</div>
                    <h3 className="font-bold text-lg text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                    <button className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold hover:brightness-110 transition duration-300" >
                      Reservar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
        </section>
      </main>
    </>
  );
}


/// button mt-2 px-4 py-2 bg-gradient-to-r 
// from-blue-500 to-blue-700 text-white rounded-full font-semibold hover:brightness-110 transition duration-300

//card bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-lg hover:shadow-2xl transition

// titulo text-4xl md:text-5xl font-extrabold
//  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 mb-6 text-center