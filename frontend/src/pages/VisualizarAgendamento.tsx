import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, Stack } from '@chakra-ui/react';
import './VisualizarAgendamento.css';
import {Nav} from "../components/nav.tsx";

const VisualizarAgendamentos = () => {
    const agendamentos = [
        { id: 1, empresa: 'Empresa A', data: '2024-07-01', hora: '10:00', status: 'Pendente' },
        { id: 2, empresa: 'Empresa B', data: '2024-07-02', hora: '14:00', status: 'Confirmado' },
        // Adicione mais agendamentos conforme necessário
    ];

    return (
        <Box className="visualizar-agendamentos">
            <Nav list={[{href : "/EmpresaVisualizar", text: "Agendamentos da Empresa"}, {href : "/CadastroEmpresa", text : "Cadastro de Empresa"}, {href: "/Agendamentos", text: "Agendamentos"}]} mainName={"Codethon"}/>
            <Heading as="h1">Visualizar Agendamentos</Heading>
            <Text>Aqui você pode visualizar e gerenciar os agendamentos das empresas.</Text>
            <Box overflowX="auto">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Empresa</Th>
                            <Th>Data</Th>
                            <Th>Hora</Th>
                            <Th>Status</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {agendamentos.map((agendamento) => (
                            <Tr key={agendamento.id}>
                                <Td>{agendamento.id}</Td>
                                <Td>{agendamento.empresa}</Td>
                                <Td>{agendamento.data}</Td>
                                <Td>{agendamento.hora}</Td>
                                <Td>{agendamento.status}</Td>
                                <Td className="actions">
                                    <Stack direction={['column', 'row']} spacing={2}>
                                        <Button as={Link} to={`/DetalheAgendamento/${agendamento.id}`} colorScheme="teal" size="sm">Visualizar</Button>
                                        <Button colorScheme="blue" size="sm">Agendar</Button>
                                    </Stack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default VisualizarAgendamentos;
