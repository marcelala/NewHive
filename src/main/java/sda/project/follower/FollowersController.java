package sda.project.follower;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sda.project.exception.ResourceNotFoundException;
import sda.project.user.User;
import sda.project.user.UserRepository;
import sda.project.user.UserService;

@RestController
public class FollowersController {

    @Autowired
    UserRepository userRepository;

    FollowerService followerService;
    FollowerRepository followerRepository;

    public FollowersController(UserRepository userRepository, FollowerService followerService, FollowerRepository followerRepository) {
        this.userRepository = userRepository;
        this.followerService = followerService;
        this.followerRepository = followerRepository;
    }

    @PutMapping("/follower/add/{id}")
    public ResponseEntity<Followers> addFollower(@PathVariable Long id)
    {
        User following = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return followerService.addFollower(following);
    }

    @DeleteMapping("/unfollow/remove/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeFollower(@PathVariable Long id)
    {
        User following = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        followerService.removeFollower(following);
    }
}
