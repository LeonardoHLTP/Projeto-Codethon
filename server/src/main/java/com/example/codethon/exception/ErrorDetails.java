package com.example.codethon.exception;

import lombok.Getter;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@Getter
public class ErrorDetails {

    private final Date timestamp = new Date();
    private final String exception;
    private final String message;
    private final String path;
    private final String detail;
    private final Object properties;

    public ErrorDetails(Exception ex, WebRequest request) {
        this(ex, request, null, ex.getMessage());
    }

    public ErrorDetails(Exception ex, WebRequest request, Object properties, String message) {

        this.exception = ex.getClass().getName();
        this.message = message;
        this.path = ((ServletWebRequest) request).getRequest().getRequestURI();
        this.detail = this.getRootCause(ex).getMessage();
        this.properties = properties;

    }

    private Throwable getRootCause(Throwable e) {
        Throwable cause = null;
        Throwable result = e;

        while (null != (cause = result.getCause()) && (result != cause)) {
            result = cause;
        }
        return result;
    }
}
