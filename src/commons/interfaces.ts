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

export interface Projeto{
  id: number
  titulo: string
  descricao: string
  justificativa: string
  dataInicio: Date
  dataTermino: Date
  publicoAlvo: string
  vinculadoDisciplina: boolean
  restricaoPublico: string
  status: string
}
