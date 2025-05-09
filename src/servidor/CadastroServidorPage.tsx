import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ServidorService from '@/servidor/ServidorService.ts'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form.tsx'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button.tsx'
import { Departamentos, ErrorResponse } from '@/commons/interfaces.ts'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

const formSchema = z.object({
  id: z.number().optional(),
  nomeCompleto: z.string().min(3, {
    message: 'Nome completo deve ter pelo menos 3 caracteres.',
  }),
  cpf: z.string().length(11, {
    message: 'CPF deve ter exatamente 11 dígitos.',
  }),
  siape: z.string().length(7, {
    message: 'SIAPE deve ter exatamente 7 dígitos.',
  }),
  emailInstitucional: z.string().email({
    message: 'Email institucional inválido.',
  }),
  telefone: z.string().optional(),
  departamento: z.string().min(3, {
    message: 'Departamento deve ter pelo menos 3 caracteres.',
  }),
})

export function CadastroServidorPage() {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    ServidorService.save(values)
      .then(() => {
        alert('Servidor cadastrado com sucesso!')
        void navigate('/')
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        alert('Error saving servidor:' + error.message)
        console.log(error)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nomeCompleto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="Nome Completo" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input type="text" placeholder="CPF" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="siape"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SIAPE</FormLabel>
              <FormControl>
                <Input type="text" placeholder="SIAPE" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailInstitucional"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Institucional</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email Institucional"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Telefone" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="departamento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Departamento</FormLabel>
              <FormControl>
                <select {...field} className="border rounded px-2 py-1 w-full">
                  <option value="" disabled selected>
                    Selecione o departamento
                  </option>
                  {Object.entries(Departamentos).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Cadastrar Servidor</Button>
      </form>
    </Form>
  )
}
