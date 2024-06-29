package com.example.codethon.resource;

import com.example.codethon.dto.AgendamentoDTO;
import com.example.codethon.service.AgendamentoService;
import com.example.codethon.utils.CrudResource;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/agendamento")
public class AgendamentoResource extends CrudResource {

    private final AgendamentoService agendamentoService;

    @Override
    public AgendamentoService getService() {
        return agendamentoService;
    }

    @PostMapping("/horarios-disponiveis")
    public ResponseEntity<List<AgendamentoDTO>> findHorariosDisponiveis(@RequestBody AgendamentoDTO agendamentoDTO) {
        return ResponseEntity.ok(agendamentoService.findHorariosDisponiveis(agendamentoDTO));
    }

    @PostMapping("/agendar")
    public ResponseEntity<AgendamentoDTO> agendar(@RequestBody AgendamentoDTO agendamentoDTO) {
        return ResponseEntity.ok(agendamentoService.agendar(agendamentoDTO));
    }

}
