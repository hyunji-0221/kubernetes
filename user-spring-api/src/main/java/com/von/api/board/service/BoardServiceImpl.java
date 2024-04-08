package com.von.api.board.service;


import com.von.api.board.model.BoardDTO;
import com.von.api.common.component.MessengerVO;
import com.von.api.common.component.PageRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    @Override
    public MessengerVO save(BoardDTO boardDTO) {
        return null;
    }

    @Override
    public MessengerVO deleteById(Long id) {
        return null;
    }

    @Override
    public MessengerVO modify(BoardDTO boardDTO) {
        return null;
    }

    @Override
    public List<BoardDTO> findAll(PageRequestVO vo) {
        return null;
    }

    @Override
    public Optional<BoardDTO> findById(Long id) {
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
