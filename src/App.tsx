import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { FormPage } from './pages/FormPage';
import { ContactPage } from './pages/ContactPage';
import { SettingsPage } from './pages/SettingsPage';
import { DetailsPage } from './pages/DetailsPage';
import { WelcomePage } from './pages/WelcomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
