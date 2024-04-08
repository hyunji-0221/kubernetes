package com.von.api.common.service;

import com.von.api.common.component.PageRequestVO;

import java.util.List;
import java.util.Optional;

public interface QueryService<T> {
    List<T> findAll(PageRequestVO vo);
    Optional<T> findById(Long id);
    long count();
    boolean existById(Long id);
}
