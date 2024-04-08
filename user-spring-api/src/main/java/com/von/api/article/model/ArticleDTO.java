package com.von.api.article.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

//object와 같은것.

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Log4j2
@Data // getter, settter, toString

@Component
public class ArticleDTO  {
    private Long id;
    private String title;
    private String content;
    private String postdate;

    private Long writerId;
    private Long boardId;
}
