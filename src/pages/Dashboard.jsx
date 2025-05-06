import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
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
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Se não tiver token, redireciona para Login
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600"> Bem-vindo à sua Dashboard!</h1>
        <p className="text-gray-600">Pagina para ver e criar eventos  .</p>

        

        <button
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          className="mt-6 py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
