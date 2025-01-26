package com.example.challenge3_backend.Controller;

import com.example.challenge3_backend.Validators.AdminValidator;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(FlagController.class)
class FlagControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AdminValidator adminValidator;

    @TestConfiguration
    static class TestConfig {
        @Bean
        public AdminValidator adminValidator() {
            return Mockito.mock(AdminValidator.class);
        }
    }

    @Test
    void shouldReturnFlagWhenUserIsAdmin() throws Exception {
        String email = "admin@example.com";

        when(adminValidator.validateByEmail(email)).thenReturn(true);

        mockMvc.perform(get("/api/v1/flag/{email}", email)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.task").value("CHALLENGE 3"))
                .andExpect(jsonPath("$.message").value("FLAG{challenge-3-flag-364232423313}"));
    }

    @Test
    void shouldReturnForbiddenWhenUserIsNotAdmin() throws Exception {
        String email = "user@example.com";

        // Mock the AdminValidator to return false for non-admin emails
        when(adminValidator.validateByEmail(email)).thenReturn(false);

        mockMvc.perform(get("/api/v1/flag/{email}", email)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isForbidden());
    }
}

