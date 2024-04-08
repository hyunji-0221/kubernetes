package com.von.api.common.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(AutoCloseable.class)
@Getter
public class BaseEntity {

    @CreatedDate // 생성된 시간 정보
    @Column(name = "post_date", updatable = false)
    private LocalDateTime postdate;

    @LastModifiedDate
    @Column(name = "mod_date")
    private LocalDateTime modDate;

}
