package com.von.api.article.model;


import com.von.api.board.model.Board;
import com.von.api.common.model.BaseEntity;
import com.von.api.user.model.User;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = "id")

@Entity(name = "articles")

@Builder
@AllArgsConstructor
public class Article extends BaseEntity {

    @Id
    @Column(name="id",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String content;
    //    private Long writer;


    @ManyToOne
    @JoinColumn(name = "board")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "writer")
    private User writer;


}
