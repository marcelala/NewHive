package sda.project.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/** This is a Controller class of User Entity which contains methods of User Entity.
 * @since : 2021-05-04
 */
@RestController
public class UserController {

    UserService userService;

    //
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * This Method represents User can search other user
     */
   @GetMapping(path = "/search", params = {"name"})
   public ResponseEntity<List<User>> getAllUserByName(@RequestParam String name) {
        return ResponseEntity.ok(userService.searchUserByName(name));
    }

//       @GetMapping(path = "/user", params = {"id"})
//    public ResponseEntity<User> getUserById(@RequestParam Long id) {
//         return ResponseEntity.ok(userService.searchUserById(id));
//     }
}