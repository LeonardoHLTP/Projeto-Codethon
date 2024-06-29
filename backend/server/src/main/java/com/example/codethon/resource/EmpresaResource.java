package com.example.codethon.resource;

import com.example.codethon.domain.Empresa;
import com.example.codethon.service.EmpresaService;
import com.example.codethon.utils.CrudResource;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/empresa")
public class EmpresaResource extends CrudResource<Empresa, Long> {

    private final EmpresaService empresaService;

    @Override
    public EmpresaService getService() {
        return empresaService;
    }


}
