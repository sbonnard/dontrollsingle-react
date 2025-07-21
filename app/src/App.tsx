import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppDice from './AppDice';
import AppWorldMap from './AppWorldMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppDice />} />
        <Route path="/worldmap" element={<AppWorldMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;