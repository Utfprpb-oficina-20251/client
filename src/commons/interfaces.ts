export interface IUserSignIn {
  displayName: string
  username: string
  password: string
}

export interface IUserSignUp {
  username: string
  password: string
}

export interface AuthenticationResponse {
  token: string
  user: AuthenticatedUser
}

export interface AuthenticatedUser {
  username: string
  authorities: Authorities[]
}

export interface Authorities {
  authority: string
}

export interface Projeto {
  id: number
  titulo: string
  descricao: string
  justificativa: string
  dataInicio: Date
  dataTermino: Date
  publicoAlvo: string
  vinculadoDisciplina: boolean
  restricaoPublico: string
  equipeExecutora: Servidor[]
  status: string
}

export interface Servidor {
  id?: number
  nomeCompleto: string
  cpf?: string
  siape?: string
  emailInstitucional: string
  telefone?: string
  departamento: string
}

export interface ErrorResponse {
  timestamp: number
  status: number
  message: string
  url: string
  validationErrors: string[]
}

export enum Departamentos {
  CALEM = 'Centro Acadêmico Lingua Estrangeira Moderna',
  DAADM = 'Departamento de Administração',
  DAAGR = 'Departamento de Agronomia',
  DACOC = 'Departamento de ',
  DACON = 'Departamento de Ciências Contábeis',
  DAELE = 'Departamento de Engenharia Elétrica',
  DAFIS = 'Departamento de Física',
  DAGRO = 'Departamento de Agronomia',
  DAHUM = 'Departamento de Ciências Humanas',
  DAINF = 'Departamento de Ciência da Computação',
  DALET = 'Departamento de Letras',
  DAMAT = 'Departamento de Matemática',
  DAMEC = 'Departamento de Engenharia Mecânica',
  DAQUI = 'Departamento de Química',
  LATO_SENSU = 'Departamento de Pós-Graduação Lato Sensu',
  NUAPE = 'Nucleo de Apoio Pedagógico',
  STRICTO = 'Departamento de Pós-Graduação Stricto Sensu',
}
