import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddAsset from './pages/AddAsset';
import EditAsset from './pages/EditAsset';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddAsset />} />
        <Route path="/edit/:id" element={<EditAsset />} />
      </Routes>
    </Router>
  );
}

export default App;

