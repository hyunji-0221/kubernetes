package com.von.api.user;

import com.von.api.article.Article;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = "id")

@Entity(name = "users")

public class User {

    @Id
    @Column(name="id",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String job;

    @OneToMany(mappedBy = "writer")
    private List<Article> articles;

    @Builder(builderMethodName = "builder")
    public User(Long id, String username, String password
            , String name, String phone, String job, List<Article> articles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.job = job;
        this.articles = articles;
    }
}
