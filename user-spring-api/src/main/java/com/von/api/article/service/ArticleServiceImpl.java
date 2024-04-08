package com.von.api.article.service;

import com.von.api.article.model.ArticleDTO;
import com.von.api.article.respository.ArticleRepository;
import com.von.api.common.component.MessengerVO;
import com.von.api.common.component.PageRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {
    private final ArticleRepository repo;


    @Override
    public MessengerVO save(ArticleDTO articleDTO) {
        return null;
    }

    @Override
    public MessengerVO deleteById(Long id) {
        return null;
    }

    @Override
    public MessengerVO modify(ArticleDTO articleDTO) {
        return null;
    }

    @Override
    public List<ArticleDTO> findAll(PageRequestVO vo) {
        return null;
    }

    @Override
    public Optional<ArticleDTO> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public boolean existById(Long id) {
        return false;
    }
}
