import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { FormPage } from './pages/FormPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
}

export default App;
