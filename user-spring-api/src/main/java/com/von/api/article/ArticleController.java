package com.von.api.article;

import com.von.api.enums.Messenger;
import com.von.api.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleServiceImpl service;

    @GetMapping("/api/all-articles")
    public Map<?, ?> findAll() throws SQLException {
        Map<String, Object> map = new HashMap<>();
        map.put("message", Messenger.SUCCESS);
//        @SuppressWarnings("unchecked")
//        List<Article> list = service.findAll();
//        map.put("result", list);

        map.put("result", List.of(Article.builder()
                .id(1L)
                .title("articleTitle1")
                .content("content1")
//                .writer(User.builder().id(2L).build())
                .postdate("date")
                .build()));

        return map;
    }
}
