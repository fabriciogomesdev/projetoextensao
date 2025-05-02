import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando os componentes de cada tela
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import ColaboradorPage from './pages/ColaboradorPage';

import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";

z.setErrorMap(zodI18nMap);

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
