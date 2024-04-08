package com.von.api.common.service;

import com.von.api.common.component.MessengerVO;

public interface CommandService<T> {
    MessengerVO save(T t);
    MessengerVO deleteById(Long id);
    MessengerVO modify(T t);
}
