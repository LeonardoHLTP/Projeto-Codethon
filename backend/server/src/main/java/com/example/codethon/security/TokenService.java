package com.example.codethon.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.codethon.domain.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    public String generateToken(User user){

            try {
                Algorithm hashing = Algorithm.HMAC256(secret);
                return JWT.create()
                        .withIssuer("genniuschat")
                        .withSubject(user.getEmail())
                        .withExpiresAt(getExpirationDate())
                        .sign(hashing);
            } catch ( Exception e ) {
                return null;
            }

    }

    public String validatedToken (String token) {
        return JWT.require(Algorithm.HMAC256(secret))
                .withIssuer("genniuschat")
                .build()
                .verify(token)
                .getSubject();
    }

    private Instant getExpirationDate() {
        return LocalDateTime.now().plusHours(24).toInstant(ZoneOffset.of("-03:00"));
    }

}
