// src/services/ProjetoService.ts
import { Projeto } from '../commons/interfaces'
import { BaseService } from '@/utils/BaseService.ts'

class ProjetoService extends BaseService {
  constructor() {
    super('/projeto')
  }

  async save(projeto: Projeto): Promise<Projeto> {
    return this.post<Projeto>(projeto)
  }

  async findById(id: number): Promise<Projeto> {
    return this.get<Projeto>(`/${id}`)
  }

  async findAll(): Promise<Projeto[]> {
    return this.get<Projeto[]>()
  }

  async remove(id: number): Promise<void> {
    return this.delete(`/${id}`)
  }
}

export default new ProjetoService()
