package com.example.codethon.service;

import com.example.codethon.domain.User;
import com.example.codethon.dto.user.UserLoginDTO;
import com.example.codethon.dto.user.UserRegisterDTO;
import com.example.codethon.repository.UserRepository;
import com.example.codethon.security.TokenService;
import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONObject;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    private final TokenService tokenService;

    private static final String MESSAGE = "message";

    public JSONObject login(UserLoginDTO user) {
        try {

            var existedUser = (User) userRepository.findByEmail(user.getEmail());
            if (!existedUser.getAtivo()) return new JSONObject().appendField(MESSAGE, "Not Activated");

            var userAuth = new UsernamePasswordAuthenticationToken
                    (user.getEmail(), user.getSenha());

            var auth = authenticationManager
                    .authenticate(userAuth);

            var token = tokenService.generateToken((User) auth.getPrincipal());

            return new JSONObject().appendField("token", token);

        } catch (Exception e) {
            return new JSONObject().appendField(MESSAGE, "Invalid credentials");
        }
    }

    public JSONObject register(UserRegisterDTO user) {
        try {
            if (userRepository.findByEmail(user.getEmail()) != null)
                return new JSONObject().appendField(MESSAGE, "User already registered");

            String encryptedPassword = new BCryptPasswordEncoder().encode(user.getSenha());

            userRepository.save(
                    new User (
                            user.getNome(),
                            user.getEmail(),
                            encryptedPassword
                    ));

            return new JSONObject().appendField(MESSAGE, "User registered successfully");

        } catch (Exception e) {
            return new JSONObject().appendField(MESSAGE, "Error registering user, " + e.getMessage());
        }
    }
}
