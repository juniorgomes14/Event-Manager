import React from "react";
import { useParams } from "react-router-dom";


const mockEvents = [
  {
    id: 1,
    title: "Concerto de Rock",
    category: "Concertos",
    city: "Santa Maria",
    date: "2025-06-08",
    price: 35,
    description: "Uma noite inesquecível com as melhores bandas de rock.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Teatro Infantil",
    category: "Teatro",
    city: "Porto",
    date: "2025-06-16",
    price: 20,
    description: "Espetáculo interativo para toda família.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Conferência Tech",
    category: "Conferências",
    city: "Praia",
    date: "2025-07-02",
    price: 99,
    description: "Encontre os principais nomes da tecnologia nacional e internacional.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Jogo de Futebol",
    category: "Desportos",
    city: "Mindelo",
    date: "2025-06-13",
    price: 15,
    description: "O clássico do futebol da cidade em cabo verde. Não fique de fora!",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
];

export default function EventDetailPage() {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return (
      <>
       
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">Evento não encontrado.</h2>
          <a href="/" className="mt-4 text-blue-600 underline">Voltar para Home</a>
        </div>
      </>
    );
  }

  return (
    <>
    
      <main className="bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                {event.category}
              </span>
              <span className="inline-block text-gray-600 text-sm">
                {event.city} | {event.date}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{event.title}</h1>
            <div className="text-2xl font-bold text-blue-700 mb-4">
              {event.price ? `€${event.price}` : "Grátis"}
            </div>
            <p className="text-gray-700 text-lg mb-6">{event.description}</p>
            <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 text-lg transition">
              Reservar Ingresso
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
