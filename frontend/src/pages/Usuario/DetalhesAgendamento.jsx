import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import './DetalhesAgendamento.css'; // Novo arquivo de estilo

const DetalhesAgendamento = () => {
    const { id } = useParams();

    // Aqui você pode buscar os detalhes do agendamento a partir de um servidor ou banco de dados
    const agendamentos = [
        { id: 1, empresa: 'Empresa A', data: '2024-07-01', hora: '10:00', status: 'Pendente', descricao: 'Descrição do agendamento 1' },
        { id: 2, empresa: 'Empresa B', data: '2024-07-02', hora: '14:00', status: 'Confirmado', descricao: 'Descrição do agendamento 2' },
        { id: 3, empresa: 'Empresa C', data: '2024-07-02', hora: '14:00', status: 'Pendente', descricao: 'Descrição do agendamento 2' },
        { id: 4, empresa: 'Empresa D', data: '2024-07-02', hora: '14:00', status: 'Confirmado', descricao: 'Descrição do agendamento 2' },
        { id: 5, empresa: 'Empresa E', data: '2024-07-02', hora: '14:00', status: 'Finalizado', descricao: 'Descrição do agendamento 2' },

    ];

    const agendamento = agendamentos.find(agendamento => agendamento.id === parseInt(id));

    if (!agendamento) {
        return <Text>Agendamento não encontrado.</Text>;
    }

    return (
        <Box className="detalhes-agendamento">
            <Heading as="h1">Detalhes do Agendamento</Heading>
            <Text><strong>Empresa:</strong> {agendamento.empresa}</Text>
            <Text><strong>Data:</strong> {agendamento.data}</Text>
            <Text><strong>Hora:</strong> {agendamento.hora}</Text>
            <Text><strong>Status:</strong> {agendamento.status}</Text>
            <Text><strong>Descrição:</strong> {agendamento.descricao}</Text>
        </Box>
    );
};

export default DetalhesAgendamento;
