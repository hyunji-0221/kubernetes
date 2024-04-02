package com.von.api.article;
import com.von.api.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = "id")

@Entity(name = "articles")

@Builder
@AllArgsConstructor
public class Article {

    @Id
    @Column(name="id",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String content;
    private String postdate;
//    private Long writer;
    @ManyToOne
    @JoinColumn(name = "writer")
    private User writer;


}
