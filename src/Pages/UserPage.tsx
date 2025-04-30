// src/pages/UserPage.tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"

const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string().min(11, "CPF inválido"),
  email: z.string().email("Email inválido"),
  data: z.date({
    required_error: "Data é obrigatória",
    invalid_type_error: "Data inválida"
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function UserPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const selectedDate = watch("data")

  const onSubmit = (data: FormValues) => {
    console.log("Formulário enviado:", data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 space-y-6"
    >
      <h1 className="text-2xl font-bold text-center text-[#d4542c]">Agendamento</h1>

      <div className="space-y-4">
        <div>
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" {...register("nome")} />
          {errors.nome && <p className="text-sm text-red-500">{errors.nome.message}</p>}
        </div>

        <div>
          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" {...register("cpf")} />
          {errors.cpf && <p className="text-sm text-red-500">{errors.cpf.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="pt-4">
        <Label>Selecione uma data</Label>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(date) => {
            if (date) setValue("data", date)
          }}
          className="rounded-md border mt-2"
        />
        {errors.data && <p className="text-sm text-red-500">{errors.data.message}</p>}
        {selectedDate && (
          <p className="text-sm text-gray-600 mt-2">
            Data selecionada: <strong>{format(selectedDate, "dd/MM/yyyy")}</strong>
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-[#d4542c] text-white py-2 px-4 rounded hover:bg-[#c3471d]"
      >
        Agendar
      </button>
    </form>
  )
}
