package com.example.codethon.repository;

import com.example.codethon.domain.Agendamento;
import com.example.codethon.domain.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {

    List<Agendamento> findByDataAgendamentoAndEmpresa(LocalDate data, Empresa empresa);

}
