import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import LearningPath from "./components/LearningPath";

function App() {
  return (
    <div>
      <Home />
      <LearningPath />
    </div>
  );
}

export default App
