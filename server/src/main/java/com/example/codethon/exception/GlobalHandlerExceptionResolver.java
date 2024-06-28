package com.example.codethon.exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

@Component
public class GlobalHandlerExceptionResolver implements HandlerExceptionResolver {

    private final ObjectMapper objectMapper;

    public GlobalHandlerExceptionResolver(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        try {
            response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());

            Map<String, Object> errorDetails = new HashMap<>();
            errorDetails.put("timestamp", System.currentTimeMillis());
            errorDetails.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
            errorDetails.put("error", HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
            errorDetails.put("message", ex.getMessage());
            errorDetails.put("path", request.getRequestURI());

            String errorDetailsJson = objectMapper.writeValueAsString(errorDetails);

            response.setContentType("application/json");

            OutputStream out = response.getOutputStream();
            out.write(errorDetailsJson.getBytes());
            out.flush();

            return new ModelAndView();
        } catch (IOException ioException) {
            ioException.printStackTrace();
            return null;
        }
    }
}
