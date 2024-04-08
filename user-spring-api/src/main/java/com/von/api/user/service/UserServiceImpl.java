package com.von.api.user.service;

import com.von.api.common.component.MessengerVO;
import com.von.api.common.component.PageRequestVO;
import com.von.api.enums.Messenger;
import com.von.api.user.model.User;
import com.von.api.user.model.UserDTO;
import com.von.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Controller
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository repo;

    @Override
    public MessengerVO save(UserDTO userDTO) {
        return null;
    }

    @Override
    public MessengerVO deleteById(Long id) {
        return null;
    }

    @Override
    public List<UserDTO> findAll(PageRequestVO vo) {
        return null;
    }

    @Override
    public Optional<UserDTO> findById(Long id) {
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

    @Override
    public MessengerVO modify(UserDTO user) {
        return null;
    }

    @Override
    public List<UserDTO> findUsersByName(String name) {
        return null;
    }

    @Override
    public List<UserDTO> findUsersByJob(String job) {
        return null;
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return Optional.empty();
    }

    @Override
    public MessengerVO login(UserDTO param) {
        return null;
    }
}
