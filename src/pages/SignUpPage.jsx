import React, { useState } from "react";
import { toast } from 'react-toastify';


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [role, setRole] = useState("user"); 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password || !confirmPassword) {
      
      toast.error("All fields are required.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      
      toast.error("Enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
   
      toast.error("Passwords do not match.");
      return;
    }
    if (!termsAccepted) {
     
      toast.error("You must accept the terms and conditions.");
      return;
    }
  
    
  
    try {
      const response = await fetch('http://localhost:3000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("User registered successfully! 🎉");
        
        // Redirecionar para login depois de alguns segundos
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error("Error registering user. Try again later.");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="bg-white px-8 py-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create your account</h2>
        <p className="text-center text-gray-500 mb-6">Sign up to get started.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="name"
              placeholder="Your Name"
            />
          </div>
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
              autoComplete="email"
              placeholder="you@email.com"
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
                autoComplete="new-password"
                placeholder="Create a password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 px-2 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword((s) => !s)}
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
              placeholder="Repeat your password"
            />

             <div className="">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 ">
                  Account Type
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
           
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
            </label>
          </div>

         {/* {error && <div className="text-sm text-red-600 text-center">{error}</div>}*/}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
