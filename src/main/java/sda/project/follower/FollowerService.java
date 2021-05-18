package sda.project.follower;

import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
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
        follower.getFollowing().add(followers);
        following.getFollowers().add(followers);
        return ResponseEntity.status(HttpStatus.CREATED).body(followers);
    }

    public void removeFollower(User following)
    {
        User follower = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Followers followers = followerRepository.findByToAndFrom(following, follower);
        follower.getFollowing().remove(followers);
        following.getFollowers().remove(followers);
        followerRepository.delete(followers);
    }

}
