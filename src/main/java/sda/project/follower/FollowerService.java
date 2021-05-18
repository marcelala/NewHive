package sda.project.follower;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sda.project.auth.AuthService;
import sda.project.user.User;
import sda.project.user.UserService;


/**
 * A service class which contains necessary service methods to operate Follower Entity.
 * @since : 2021-05-14
 */
@Service
public class FollowerService {

    FollowerRepository followerRepository;
    UserService userService;
    AuthService authService;

    /**
     * Creating the object of different class.
     */
    @Autowired
    public FollowerService(FollowerRepository followerRepository, UserService userService, AuthService authService)
    {
        this.followerRepository = followerRepository;
        this.userService = userService;
        this.authService = authService;
    }

    /**
     * A method to add follower in the User connection
     * @return adds followers in to the authorized User's connection
     */
    public ResponseEntity<Followers> addFollower(User following)
    {
        User follower = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Followers followers = new Followers(following,follower);
        followerRepository.save(followers);
        follower.getFollowing().add(followers);
        following.getFollowers().add(followers);
        return ResponseEntity.status(HttpStatus.CREATED).body(followers);
    }

    /**
     * A method to remove follower from User connection
     * @return removes connection from the authorized User's connection
     */
    public void removeFollower(User following)
    {
        User follower = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Followers followers = followerRepository.findByToAndFrom(following, follower);
        follower.getFollowing().remove(followers);
        following.getFollowers().remove(followers);
        followerRepository.delete(followers);
    }

}
