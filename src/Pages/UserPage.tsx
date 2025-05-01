// src/pages/UserPage.tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"
import { useEffect, useRef, useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { QRCodeCanvas } from "qrcode.react"

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

  // Referências para navegação entre campos
  const nomeRef = useRef<HTMLInputElement>(null)
  const cpfRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormValues | null>(null)

  const onSubmit = (data: FormValues) => {
    console.log("Formulário enviado:", data)
    setFormData(data)
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLElement | null>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault()
      nextRef.current?.focus()
    }
  }


  // Foco automático no campo de nome ao carregar a página
  useEffect(() => {
    nomeRef.current?.focus()
  }, [])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 space-y-6"
    >
      <h1 className="text-2xl font-bold text-center text-[#d4542c]">Agendamento</h1>

      <div className="space-y-4">
        <div>
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            {...register("nome")}
            ref={nomeRef}
            onKeyDown={(e) => handleKeyDown(e, cpfRef)}
          />
          {errors.nome && <p className="text-sm text-red-500">{errors.nome.message}</p>}
        </div>

        <div>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            {...register("cpf")}
            ref={cpfRef}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
          />
          {errors.cpf && <p className="text-sm text-red-500">{errors.cpf.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            ref={emailRef}
            onKeyDown={(e) => handleKeyDown(e, calendarRef)}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="pt-4" ref={calendarRef} tabIndex={-1}>
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

      {formData && (
        <div className="pt-6 text-center">
          <p className="mb-2 font-medium">QR Code do Agendamento:</p>
          <QRCodeCanvas
            value={JSON.stringify(formData)}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin
          />
        </div>
      )}
    </form>
  )
}
