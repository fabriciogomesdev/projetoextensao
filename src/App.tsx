import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando os componentes de cada tela (ainda vamos criar)
import UserPage from './pages/UserPage';  // Página do usuário
import AdminPage from './pages/AdminPage'; // Página do administrador
import ColaboradorPage from './pages/ColaboradorPage'; // Página do colaborador

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/colaborador" element={<ColaboradorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
