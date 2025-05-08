import { useEffect, useState } from 'react'
import { Projeto } from '@/commons/interfaces.ts'
import ProjetoService from '@/projetos/ProjetoService.ts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

export function HomeProjetosListPage() {
  const [projetos, setProjetos] = useState<Projeto[]>([])
  useEffect(() => {
    loadProjetos()
  }, [])

  const loadProjetos = async () => {
    const response = await ProjetoService.findAll()
    if (!response) {
      setProjetos(response)
    }
    if (projetos.length === 0) {
      const projmock = [
        {
          id: 1,
          titulo: 'Projeto 1',
          descricao: 'Descricao do projeto 1',
          justificativa: 'Justificativa do projeto 1',
          dataInicio: new Date('2023-01-01'),
          dataTermino: new Date('2023-12-31'),
          publicoAlvo: 'Público alvo do projeto 1',
          vinculadoDisciplina: true,
          restricaoPublico: 'Restrição do projeto 1',
          equipeExecutora: [],
          status: 'Em andamento',
        },
        {
          id: 2,
          titulo: 'Projeto 2',
          descricao: 'Descricao do projeto 2',
          justificativa: 'Justificativa do projeto 2',
          dataInicio: new Date('2023-01-01'),
          dataTermino: new Date('2023-12-31'),
          publicoAlvo: 'Público alvo do projeto 2',
          vinculadoDisciplina: true,
          restricaoPublico: 'Restrição do projeto 2',
          equipeExecutora: [],
          status: 'Em andamento',
        },
      ]
      setProjetos(projmock)
    }

    console.log(projetos)
  }
  return (
    <div>
      {projetos.length > 0 &&
        projetos.map((projeto) => (
          <Card key={projeto.id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{projeto.titulo}</CardTitle>
              <CardDescription>{projeto.descricao}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <p>Data de inicio: {projeto.dataInicio.toDateString()}</p>
                  <p>Data de termino: {projeto.dataTermino.toDateString()}</p>
                  <p>Público alvo: {projeto.publicoAlvo}</p>
                  <p>Restrição: {projeto.restricaoPublico}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      {projetos.length == 0 && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl">Nenhum projeto encontrado</p>
        </div>
      )}
    </div>
  )
}
