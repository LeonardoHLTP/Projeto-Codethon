package com.example.codethon.utils;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;

@Service
@Transactional
public abstract class CrudService<T, ID extends Serializable> {

        protected abstract JpaRepository<T, ID> getRepository();

        public List<T> findAll() {
            return getRepository().findAll();
        }

        public T findOneById(ID id) { return getRepository().findById(id).orElseThrow(); }

        public T save(T entity) {
            return getRepository().save(entity);
        }

        public void delete(ID id) {
            getRepository().deleteById(id);
        }
}
