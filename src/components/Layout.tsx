import { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png"; // ajuste o caminho se estiver diferente

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Menu lateral */}
      <aside className="w-64 bg-[#f6f6f6] p-4 shadow-md flex flex-col">
        <div className="mb-6">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <nav className="space-y-4">
          <Link to="/" className="text-[#d4542c] hover:underline">Início</Link>
          <Link to="/admin" className="text-[#d4542c] hover:underline">Admin</Link>
          <Link to="/colaborador" className="text-[#d4542c] hover:underline">Colaborador</Link>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col justify-between">
        <main className="p-6 flex-1 overflow-auto">{children}</main>
        <footer className="bg-[#f0f0f0] text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Meu Projeto de Extensão
        </footer>
      </div>
    </div>
  );
}
