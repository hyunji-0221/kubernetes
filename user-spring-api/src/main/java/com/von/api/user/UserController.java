package com.von.api.user;

import com.von.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserRepository repo;

    @PostMapping("/api/users/login")
    public Map<String, ?> name(@RequestBody Map<?, ?> map) {
        Map<String, Messenger> respMap = new HashMap<>();
        String username = (String) map.get("username");
        String password = (String) map.get("password");
        User dbUser = repo.findByUsername(username).orElse(null);

        if (dbUser == null) {
            respMap.put("message", Messenger.FAIL);
        } else if (!dbUser.getPassword().equals(password)) {
            respMap.put("message", Messenger.WRONG_PASSWORD);
        } else {
            respMap.put("message", Messenger.SUCCESS);
        }
        return respMap;
    }

    @PostMapping(path = "/api/users/join")
    public Map<String, ?> join(@RequestBody Map<?, ?> map) {
        User newUser = repo.save(User.builder()
                .username((String) map.get("userId"))
                .password((String) map.get("password"))
                .name((String) map.get("name"))
                .phone((String) map.get("pNum"))
                .job((String) map.get("job"))
                .build());

        System.out.println("DB에 저장된 user 정보 : " + newUser);
        Map<String, Messenger> respMap = new HashMap<>();
        respMap.put("message", Messenger.SUCCESS);
        return respMap;
    }

    @GetMapping("/api/all-users")
    public Map<?, ?> allUsers() {
        Map<String, Object> respMap = new HashMap<>();
        respMap.put("message", Messenger.SUCCESS);
        respMap.put("result", List.of(User.builder()
                .id(154L)
                .username("hyunji")
                .password("123")
                .name("엄현지")
                .phone("010-1111-1111")
                .job("student")
                .build()));
        return respMap;
    }

    public Map<String, ?> save(@RequestBody Map<String, ?> map) {
        return null;
    }

    public Map<String, ?> login(@RequestBody Map<String, ?> map) {
        return null;
    }

    public Map<String, ?> changePassword(@RequestBody Map<String, ?> map) {
        return null;
    }

    public Map<String, ?> delete(@RequestBody Map<String, ?> map) {
        return null;
    }

    public Map<String, ?> findUsersByName(@RequestBody Map<String, ?> map) {
        return null;
    }

    public Map<String, ?> findUsersByJob(@RequestBody Map<String, ?> map) {
        return null;
    }


    public Map<String, ?> count() {
        return null;
    }

    public Map<String, ?> findUsers() throws SQLException {
        return null;
    }

    public void createTable() throws SQLException {
    }

    public void deleteTable() throws SQLException {
    }


    public Map<String, ?> getOne(@RequestBody Map<String, ?> map) {
        return null;
    }

    public Map<String, ?> findUser(@RequestBody Map<String, ?> map) {
        return null;
    }
}
