package com.von.api.user.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

@Component
public class UserDTO {

    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String job;

    private List<Article> articles;

}
