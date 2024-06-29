package com.example.codethon.service;

import com.example.codethon.domain.Empresa;
import com.example.codethon.repository.EmpresaRepository;
import com.example.codethon.utils.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmpresaService extends CrudService<Empresa, Long> {

    private final EmpresaRepository empresaRepository;

    @Override
    protected JpaRepository<Empresa, Long> getRepository() {
        return empresaRepository;
    }
}
