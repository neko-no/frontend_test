import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { FormPage } from './pages/FormPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
