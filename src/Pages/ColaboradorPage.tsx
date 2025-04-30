import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

export default function ColaboradorPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-[#d4542c]">Painel do Colaborador</h1>

      <div className="space-y-4">
        <p className="text-sm text-gray-600 text-center">
          Aqui você pode visualizar seus horários e agendamentos.
        </p>

        <div className="pt-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
          {selectedDate && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              Data selecionada: <strong>{format(selectedDate, "dd/MM/yyyy")}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
