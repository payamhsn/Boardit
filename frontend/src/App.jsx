import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterPage from "./screens/RegisterPage";
import AboutPage from "./screens/AboutPage";
import DashboardPage from "./screens/DashboardPage";
import HomePage from "./screens/HomePage";
import Footer from "./components/Footer";
import LoginPage from "./screens/LoginPage";
import React, { useState, useEffect } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/users/logout");
      localStorage.removeItem("userInfo");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      // Display an error message to the user
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Optionally, show a loading indicator
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
