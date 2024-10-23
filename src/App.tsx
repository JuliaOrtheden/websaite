import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Plans from './pages/Plans';
import ReferenceCases from './pages/ReferenceCases';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/reference-cases" element={<ReferenceCases />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;