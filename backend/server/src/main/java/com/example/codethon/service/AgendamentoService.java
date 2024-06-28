package com.example.codethon.service;

import com.example.codethon.domain.Agendamento;
import com.example.codethon.repository.AgendamentoRepository;
import com.example.codethon.utils.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AgendamentoService extends CrudService<Agendamento, Long> {

    private final AgendamentoRepository agendamentoRepository;

    @Override
    protected JpaRepository<Agendamento, Long> getRepository() {
        return agendamentoRepository;
    }
}
