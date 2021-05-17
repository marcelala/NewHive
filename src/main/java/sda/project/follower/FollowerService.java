package sda.project.follower;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sda.project.auth.AuthService;
import sda.project.user.User;
import sda.project.user.UserService;

@Service
public class FollowerService {

    FollowerRepository followerRepository;
    UserService userService;
    AuthService authService;

    public FollowerService(FollowerRepository followerRepository, UserService userService, AuthService authService)
    {
        this.followerRepository = followerRepository;
        this.userService = userService;
        this.authService = authService;
    }

    public ResponseEntity<Followers> addFollower(User following)
    {
        User follower = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Followers followers = new Followers(following,follower);
        followerRepository.save(followers);
        return ResponseEntity.status(HttpStatus.CREATED).body(followers);
    }




}
