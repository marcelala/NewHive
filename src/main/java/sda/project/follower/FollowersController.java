package sda.project.follower;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import sda.project.exception.ResourceNotFoundException;
import sda.project.user.User;
import sda.project.user.UserRepository;
import sda.project.user.UserService;

@RestController
public class FollowersController {

    @Autowired
    UserRepository userRepository;

    FollowerService followerService;

    public FollowersController(UserRepository userRepository, FollowerService followerService) {
        this.userRepository = userRepository;
        this.followerService = followerService;
    }

    @PutMapping("/follower/add/{id}")
    public ResponseEntity<Followers> addFollower(@PathVariable Long id)
    {
        User following = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return followerService.addFollower(following);
    }
}
