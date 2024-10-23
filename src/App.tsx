import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Plans from './pages/Plans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
}

export default App;