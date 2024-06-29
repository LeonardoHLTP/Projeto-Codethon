import React from 'react';
import { Box, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const VisualizarAgendamentos = () => {
    const agendamentos = [
        { id: 1, empresa: 'Empresa A', data: '2024-07-01', hora: '10:00', status: 'Pendente' },
        { id: 2, empresa: 'Empresa B', data: '2024-10-02', hora: '14:00', status: 'Confirmado' },
        { id: 3, empresa: 'Empresa C', data: '2024-12-01', hora: '10:00', status: 'Pendente' },
        { id: 4, empresa: 'Empresa D', data: '2024-13-02', hora: '14:15', status: 'Finalizado' },
        { id: 5, empresa: 'Empresa E', data: '2024-20-02', hora: '14:00', status: 'Confirmado' },
    ];

    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4}>
                Visualizar Agendamentos
            </Heading>
            <Text mb={4}>
                Aqui você pode visualizar e gerenciar os agendamentos das empresas.
            </Text>
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
                            <Td>
                                <Button colorScheme="teal" size="sm" mr={2}>Visualizar</Button>
                                <Button colorScheme="blue" size="sm">Agendar</Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default VisualizarAgendamentos;
