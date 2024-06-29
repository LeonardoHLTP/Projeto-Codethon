package com.example.codethon.service;

import com.example.codethon.domain.Agendamento;
import com.example.codethon.domain.Empresa;
import com.example.codethon.domain.User;
import com.example.codethon.dto.AgendamentoDTO;
import com.example.codethon.repository.AgendamentoRepository;
import com.example.codethon.utils.CrudService;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AgendamentoService extends CrudService<Agendamento, Long> {

    private final AgendamentoRepository agendamentoRepository;

    @Override
    protected JpaRepository<Agendamento, Long> getRepository() {
        return agendamentoRepository;
    }

    private final EntityManager entityManager;

    private static final String[] horariosPossiveis = {
            "09:00", "10:00", "11:00", "12:00",
            "13:00", "14:00", "15:00", "16:00", "17:00"
    };

    public List<AgendamentoDTO> findHorariosDisponiveis(AgendamentoDTO agendamentoDTO) {
        Empresa empresa = entityManager.getReference(Empresa.class, agendamentoDTO.getIdEmpresa());

        List<Agendamento> agendamentos = agendamentoRepository.findByDataAgendamentoAndEmpresa(agendamentoDTO.getData(), empresa);

        List<String> horariosAgendados = agendamentos.stream()
                .map(Agendamento::getHorarioAgendado)
                .toList();

        List<String> horariosDisponiveis = new ArrayList<>();

        for (String horario : horariosPossiveis) {
            if (!horariosAgendados.contains(horario)) {
                horariosDisponiveis.add(horario);
            }
        }

        return horariosDisponiveis.stream()
                .map(horario -> new AgendamentoDTO(agendamentoDTO.getData(), horario))
                .collect(Collectors.toList());
    }

    public AgendamentoDTO agendar(AgendamentoDTO agendamentoDTO) {
        Agendamento agendamento = new Agendamento();

        agendamento.setUsuarioAtendimento((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        agendamento.setHorarioAgendado(agendamentoDTO.getHorario());
        agendamento.setEmpresa(entityManager.getReference(Empresa.class, agendamentoDTO.getIdEmpresa()));

        agendamentoRepository.save(agendamento);

        return agendamentoDTO;
    }
}



