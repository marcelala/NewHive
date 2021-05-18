package sda.project.follower;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;
import sda.project.profile.Profile;
import sda.project.profile.ProfileRepository;
import sda.project.user.User;
import sda.project.user.UserRepository;
import sda.project.user.UserService;

@RestController
public class FollowersController {

    @Autowired
    UserRepository userRepository;
    ProfileRepository profileRepository;
    FollowerRepository followerRepository;

    FollowerService followerService;
    AuthService authService;


    public FollowersController(UserRepository userRepository, FollowerService followerService, FollowerRepository followerRepository,ProfileRepository profileRepository,AuthService authService) {
        this.userRepository = userRepository;
        this.followerService = followerService;
        this.followerRepository = followerRepository;
        this.profileRepository = profileRepository;
        this.authService = authService;
    }

    @PutMapping("/follower/add/{id}")
    public ResponseEntity<Followers> addFollower(@PathVariable Long id)
    {
        Profile profile = profileRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        User following = profile.getOwner();
        return followerService.addFollower(following);
    }

    @DeleteMapping("/unfollow/remove/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeFollower(@PathVariable Long id)
    {
        Profile profile = profileRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        User following = profile.getOwner();
        followerService.removeFollower(following);
    }

    @GetMapping("/isFollower/{id}")
    public boolean isFollower(@PathVariable Long id)
    {
        Profile profile = profileRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        User userInSession = userRepository.findByEmail(authService.getLoggedInUserEmail());
        User profileOwner = profile.getOwner();
        Followers followers_relation = followerRepository.findByToAndFrom(profileOwner, userInSession);
        if(profileOwner.getFollowers().contains(followers_relation))
        {
            if(followers_relation.getTo().equals(profileOwner) && followers_relation.getFrom().equals(userInSession))
                return true;
        }
        else {
            return false;
        }
        return false;
    }
}
