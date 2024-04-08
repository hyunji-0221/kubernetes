package com.von.api.board.service;


import com.von.api.board.model.Board;
import com.von.api.board.model.BoardDTO;
import com.von.api.common.service.CommandService;
import com.von.api.common.service.QueryService;

public interface BoardService extends CommandService<BoardDTO>, QueryService<BoardDTO> {



    default Board dtoToEntity(BoardDTO dto){
        return Board.builder().build();
    }
    default  BoardDTO entityToDto(Board ent){
        return BoardDTO.builder().build();
    }

}
