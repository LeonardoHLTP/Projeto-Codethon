package com.example.codethon.utils;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.Serializable;
import java.util.List;

public abstract class CrudResource<T, ID extends Serializable> {
    public abstract CrudService<T, ID> getService();

    @PostMapping
    public ResponseEntity<T> save(@Validated @RequestBody T entity) {
        return ResponseEntity.ok(getService().save(entity));
    }

    @GetMapping
    public List<T> findAll() {
        return getService().findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<T> findOneById(@PathVariable ID id) {
        return ResponseEntity.ok(getService().findOneById(id));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ID id) {
        getService().delete(id);
    }
}
