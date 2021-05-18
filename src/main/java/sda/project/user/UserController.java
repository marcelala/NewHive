package sda.project.user;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

/** This is a Controller class of User Entity which contains methods of User Entity.
 * @since : 2021-05-04
 */
@RestController
public class UserController {

    UserService userService;

    /**
     * Creating the object of UserService class
     */
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

}