import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GameModesPage from './pages/GameModesPage';
import RankingPage from './pages/RankingPage';
import GameIntroduction from './components/GameIntroduction';
import GameLevel from './pages/games/ParsonsBlocksGame/GameLevel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/game-modes" element={<GameModesPage />} />
      <Route path="/game-modes/:sectionId" element={<GameModesPage />} />
      <Route path="/game-introduction/:gameId" element={<GameIntroduction />} />
      <Route path="/ParsonsBlocks/:levelId" element={<GameLevel/>}/>
      <Route path="/ParsonsBlocks" element={<GameLevel/>}/>
    </Routes>
  );
}

export default App;
