package com.von.api.article;

import com.von.api.article.service.ArticleServiceImpl;
import com.von.api.common.component.MessengerVO;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor

@RequestMapping(path="/api/articles")
@Slf4j


@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})

public class ArticleController {
    private final ArticleServiceImpl service;

    @PostMapping( "")
    public ResponseEntity<MessengerVO> save(Pageable pageable) throws SQLException {
        service.save(null);
        return ResponseEntity.ok(new MessengerVO());
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<MessengerVO> deleteById(@PathVariable long id) throws SQLException {
        service.deleteById(0L);
        return ResponseEntity.ok(new MessengerVO());
    }
    @GetMapping(path = "/find")
    public ResponseEntity<MessengerVO> findAll(Pageable pageable) throws SQLException {
        service.findAll(null);
        return ResponseEntity.ok(new MessengerVO());
    }
    @GetMapping(path = "/find/{id}")
    public ResponseEntity<MessengerVO> findById(Pageable pageable) throws SQLException {
        service.findById(0L);
        return ResponseEntity.ok(new MessengerVO());
    }
    @GetMapping(path = "/count")
    public ResponseEntity<MessengerVO> count(Pageable pageable) throws SQLException {
        service.count();
        return ResponseEntity.ok(new MessengerVO());
    }

    @GetMapping(path = "/exists/{id}")
    public ResponseEntity<MessengerVO> existById(Pageable pageable) throws SQLException {
        service.existById(0L);
        return ResponseEntity.ok(new MessengerVO());
    }


}
