package com.example.codethon.exception;

public class ValidationException extends RuntimeException {

    public ValidationException(String error) {
        super(error);
    }
}
