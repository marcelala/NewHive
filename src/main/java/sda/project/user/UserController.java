package sda.project.user;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class UserController {

    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //User can search other user
       @GetMapping(path = "/search", params = {"name"})
       public ResponseEntity<List<User>> getAllUserByName(@RequestParam String name) {
            return ResponseEntity.ok(userService.searchUserByName(name));
        }
}