package com.example.codethon.resource;

import com.example.codethon.dto.user.UserLoginDTO;
import com.example.codethon.dto.user.UserRegisterDTO;
import com.example.codethon.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthenticationResource {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<JSONObject> login(@RequestBody @Valid UserLoginDTO user)  {
        return ResponseEntity.ok(authService.login(user));
    }

    @PostMapping("/register")
    public ResponseEntity<JSONObject> register(@RequestBody @Valid UserRegisterDTO user) {
        return ResponseEntity.ok(authService.register(user));
    }

}

