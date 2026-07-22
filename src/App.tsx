import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { FormPage } from './pages/FormPage';
import { ContactPage } from './pages/ContactPage';
import { SettingsPage } from './pages/SettingsPage';
import { DetailsPage } from './pages/DetailsPage';
import { WelcomePage } from './pages/WelcomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProductsPage } from './pages/ProductsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { TodosPage } from './pages/TodosPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/todos" element={<TodosPage />} />
    </Routes>
  );
}

export default App;
