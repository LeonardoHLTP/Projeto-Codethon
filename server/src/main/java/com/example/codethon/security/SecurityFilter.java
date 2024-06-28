package com.example.codethon.security;

import com.example.codethon.domain.User;
import com.example.codethon.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
@Component
public class SecurityFilter extends OncePerRequestFilter {

    private final TokenService tokenService;

    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal
            (HttpServletRequest request,
             HttpServletResponse response,
             FilterChain filterChain)
            throws ServletException, IOException {

        try {
            var token = this.solveToken(request);

            if(token != null) {

                String login = tokenService.validatedToken(token);

                if (login == null) throw new Exception("Invalid Token" + token);

                UserDetails user = userRepository.findByEmail(login);

                User userId = (User) user;

                var authentication = new UsernamePasswordAuthenticationToken
                        (userId, token, user.getAuthorities());

                SecurityContextHolder.getContext().setAuthentication(authentication);

            }

        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Unauthorized: " + e.getMessage());
        }

        filterChain.doFilter(request, response);

    }

    private String solveToken(HttpServletRequest request) {
        var token = request.getHeader("Authorization");
        if(token == null) return null;
        return token.replace("Bearer ", "");
    }
}
