package sda.project.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;

@RestController
public class UserController {


/*
    @PutMapping("/follower/add/{id}")
    public ResponseEntity<User> addFollower(@PathVariable Long id){

        User following = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        User follower =  userService.findUserByEmail(authService.getLoggedInUserEmail());
        userService.addFollower(following, follower);
        return ResponseEntity.ok(follower);
    }*/

}