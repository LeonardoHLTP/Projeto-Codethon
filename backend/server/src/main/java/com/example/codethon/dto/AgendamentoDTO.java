package com.example.codethon.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class AgendamentoDTO {

    private LocalDate data;
    private String horario;
    private Long idEmpresa;

    public AgendamentoDTO(LocalDate data, String horario) {
        this.data = data;
        this.horario = horario;
    }
}
