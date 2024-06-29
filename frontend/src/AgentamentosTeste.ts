import { Agendamento, User, TipoAgendamento } from "./types/User"

// Criação de 10 usuários
const usuarios: User[] = [
  { nome: "João Silva", email: "joao.silva@example.com" },
  { nome: "Maria Oliveira", email: "maria.oliveira@example.com" },
  { nome: "Pedro Souza", email: "pedro.souza@example.com" },
  { nome: "Ana Santos", email: "ana.santos@example.com" },
  { nome: "Lucas Lima", email: "lucas.lima@example.com" },
  { nome: "Mariana Almeida", email: "mariana.almeida@example.com" },
  { nome: "Gustavo Pereira", email: "gustavo.pereira@example.com" },
  { nome: "Fernanda Rocha", email: "fernanda.rocha@example.com" },
  { nome: "Bruno Costa", email: "bruno.costa@example.com" },
  { nome: "Isabela Martins", email: "isabela.martins@example.com" },
]

// Definição dos tipos de agendamento
const tiposAgendamento: TipoAgendamento[] = [
  { id: 1, descricao: "Consulta Médica", valor: 150.00 },
  { id: 2, descricao: "Sessão de Fisioterapia", valor: 200.00 },
  { id: 3, descricao: "Consulta Odontológica", valor: 100.00 },
  { id: 4, descricao: "Exame de Sangue", valor: 80.00 },
  { id: 5, descricao: "Consulta Psicológica", valor: 250.00 },
]

// Função para gerar um horário aleatório
const gerarHorarioAleatorio = (): string => {
  const ano = 2024
  const mes = Math.floor(Math.random() * 12) + 1
  const dia = Math.floor(Math.random() * 28) + 1
  const hora = Math.floor(Math.random() * 24)
  const minuto = Math.floor(Math.random() * 60)
  return `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}T${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:00`
}

// Criação de 10 agendamentos
const agendamentos: Agendamento[] = []

for (let i = 0; i < 10; i++) {
  const user = usuarios[i % usuarios.length]
  const tipoAgendamento = tiposAgendamento[Math.floor(Math.random() * tiposAgendamento.length)]
  const horarioAgendamento = gerarHorarioAleatorio()

  agendamentos.push({
    user,
    tipoAgendamento,
    horarioAgendamento,
  })
}

export default agendamentos;
