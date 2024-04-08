package com.von.api.article.service;


import com.von.api.article.model.Article;
import com.von.api.article.model.ArticleDTO;
import com.von.api.common.service.CommandService;
import com.von.api.common.service.QueryService;

public interface ArticleService extends CommandService<ArticleDTO>, QueryService<ArticleDTO> {

    //추상 메소드 : 오버라이딩되어 로직이 여러 모양으로 바뀔 수 있음.
//    Map<String, ?> test();

    //디폴트 메소드 : 안의 로직이 계속 반복된다면 구현을 한번만 해서 사용.
//    default Map<String,?> dtoToEntity(ArticleDTO dto){
//        Map<String,Article> map = new HashMap<>();
//        Article article = Article.builder().build();
//        map.put("article",article);
//
//        //boardId로 db를 조회해서 해당 게시판에 게시된 글의 목록을 가져올 경우
//        List<ArticleDTO> articleDTOList = new ArrayList<>();
//
//
//
//        return map;
//    }
//
//    default Optional<ArticleDTO> entityToDTO(Article ent){
//        ArticleDTO dto = ArticleDTO.builder()
//                .content(ent.getContent())
//                .build();
//        return Optional.ofNullable(dto);
//    }

    default Article dtoToEntity(ArticleDTO dto){
        return Article.builder().build();
    }
    default ArticleDTO entityToDto(Article ent){
        return ArticleDTO.builder().build();
    }

}
