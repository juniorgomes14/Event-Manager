
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useAuth } from '../context/Authcontext';// ajuste o caminho conforme sua pasta
import { useNavigate } from "react-router-dom";




export default function LoginPage() {
  const navegate = useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword ] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { setUser } = useAuth();

 

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!email || !password) {
     toast.error("Email and password are required.");
      return;
    }
   
    
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful! 🎉");

        // Guardar o token no localStorage
       localStorage.setItem('token', data.token);

        // Redirecionar para Dashboard ou página protegida
        navegate.replace('/dashboard') ; // Ajusta conforme teu projeto
        setUser({ name: data.name, email: data.email, role: data.role});
        console.log("token",data.token)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Error logging in. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="bg-white px-8 py-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Sign in</h2>
        <p className="text-center text-gray-500 mb-6">Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-2">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
                placeholder="password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 px-2 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4.03-9-9s4-9 9-9 9 4.03 9 9a8.992 8.992 0 01-1.882 5.332M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M9.88 9.88a3 3 0 104.24 4.24m-4.24-4.24L3 21m0 0l3.53-3.53m13.44-.92A9.005 9.005 0 0112 19c-5 0-9-4.03-9-9 0-1.538.43-2.98 1.178-4.217" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="/signUp" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          {/*{error && <div className="text-sm text-red-600 text-center">{error}</div>}*/}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:brightness-110 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
                    //"  rounded-full font-semibold 0