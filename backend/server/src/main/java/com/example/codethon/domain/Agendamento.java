package com.example.codethon.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "agendamento", schema = "public")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Agendamento implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User usuarioAtendimento;

    @OneToOne
    private Empresa empresa;

    private LocalDate dataAgendamento;

    private String horarioAgendado;
}
