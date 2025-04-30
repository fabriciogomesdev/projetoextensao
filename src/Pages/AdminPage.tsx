// src/pages/AdminPage.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const agendamentos = [
    {
      id: 1,
      nome: "João Silva",
      cpf: "123.456.789-00",
      email: "joao@email.com",
      data: "05/05/2025",
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      cpf: "987.654.321-00",
      email: "maria@email.com",
      data: "06/05/2025",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#d4542c] mb-6">Painel do Administrador</h1>
      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agendamentos.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.nome}</TableCell>
                  <TableCell>{item.cpf}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.data}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Ver</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
