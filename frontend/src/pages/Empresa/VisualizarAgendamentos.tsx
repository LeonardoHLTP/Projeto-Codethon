import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Agendamento } from "../../types/User";
import agendamentos from "../../AgentamentosTeste";


export function CardAgendamento( agendamento : Agendamento ){ 
  // usuario : id
  const value : string = agendamento.tipoAgendamento.valor.toLocaleString('pt-BR', {
    style: 'currency', 
    currency: 'BRL',
});
  return (
     <Card  className="w-full  sm:w-11/12 m-auto rounded-lg hover:bg-slate-200 cursor-pointer transition-all">
        <CardHeader>
            <Text className="md:text-lg sm:h-28 font-bold">{agendamento.user.nome}</Text>
            <Text>{agendamento.user.email}</Text>
        </CardHeader>
        <CardBody>
            <Text> {agendamento.tipoAgendamento.descricao}</Text>
            <small>{value}</small>
        </CardBody>
        <CardFooter>
            <h3>{agendamento.horarioAgendamento}</h3>
        </CardFooter>
     </Card>
  )
}

export function VisualizarAgedamentos() { 
  return ( 
    <div className="h-screen bg-slate-200">
      <div className="h-screen scale-95 bg-slate-50 rounded p-5">
        <Heading>Agendamentos Marcados</Heading>
        <div className="h-[90%] grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 overflow-x-hidden overflow-y-auto gap-4">
        {agendamentos.map((agendamento, index) => (
             <CardAgendamento horarioAgendamento={agendamento.horarioAgendamento} tipoAgendamento={agendamento.tipoAgendamento}
             user={agendamento.user} key={index} />
        ))}
        </div>
      </div>
    </div>
  )
}