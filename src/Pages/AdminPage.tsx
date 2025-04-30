// src/pages/AdminPage.tsx
import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdminPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-[#d4542c] text-center">Painel do Gestor</h1>

      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <Label htmlFor="colaborador">Buscar por Colaborador</Label>
          <Input id="colaborador" placeholder="Nome do colaborador" />
        </div>

        <div className="flex-1">
          <Label>Filtrar por data</Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="border rounded-md mt-2"
          />
        </div>

        <div className="mt-4">
          <Button className="bg-[#d4542c] hover:bg-[#ec6040] text-white">
            Filtrar
          </Button>
        </div>
      </div>

      {/* Lista de agendamentos simulada */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Agendamentos</h2>
        <div className="border rounded-md p-4 space-y-2 bg-white shadow-sm">
          <p><strong>Nome:</strong> João da Silva</p>
          <p><strong>Data:</strong> {format(new Date(), "dd/MM/yyyy")}</p>
          <p><strong>Colaborador:</strong> Maria</p>
        </div>
      </div>
    </div>
  )
}
