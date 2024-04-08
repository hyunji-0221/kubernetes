package com.von.api.user.service;


import com.von.api.common.component.MessengerVO;
import com.von.api.common.service.CommandService;
import com.von.api.common.service.QueryService;
import com.von.api.user.model.User;
import com.von.api.user.model.UserDTO;

import java.util.List;
import java.util.Optional;

public interface UserService extends CommandService<UserDTO>, QueryService<UserDTO> {

    //command
    MessengerVO modify (UserDTO user);

    //query
    List<UserDTO> findUsersByName(String name);
    List<UserDTO> findUsersByJob(String job);
    Optional<User> findUserByUsername(String username);

    default User dtoToEntity(UserDTO dto){
        System.out.println("UserService dto to entity: "+dto);
        return User.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .job(dto.getJob())
                .build();
    }
    default  UserDTO entityToDto(User ent){
        return UserDTO.builder().build();
    }

    MessengerVO login(UserDTO param);
}
