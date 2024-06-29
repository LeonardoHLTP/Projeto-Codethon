export type User = {
  nome : string,
  email : string
}

export type TipoAgendamento = {
  id : number,
  descricao : string,
  valor : number,
}

export type Agendamento = { 
  user : User
  tipoAgendamento : TipoAgendamento
  horarioAgendamento : string
}

