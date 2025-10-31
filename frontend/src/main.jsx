import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import GameModesPage from './pages/GameModesPage.jsx';
import GameIntroduction from './components/GameIntroduction.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<App />} />

        {/* Página de registro */}
        <Route path="/register" element={<Register />} />

        {/* Página de inicio de sesión */}
        <Route path="/login" element={<Login />} />

        {/* Página de dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Página de Modos de Juego */}
        <Route path="/game-modes" element={<GameModesPage />} />

        {/* Página de introducción del juego */}
        <Route path="/game-introduction/:gameId" element={<GameIntroduction />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
