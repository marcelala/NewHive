package sda.project.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sda.project.profile.Profile;
import sda.project.profile.ProfileRepository;
import sda.project.user.User;
import sda.project.user.UserService;


import java.util.Date;
import java.util.List;

@RestController
public class PostController {
    private final PostService postService;
    private UserService userService;
    private ProfileRepository profileRepository;
    private PostRepository postRepository;

    @Autowired
    public PostController(PostService postService, UserService userService, ProfileRepository profileRepository, PostRepository postRepository) {
        this.postService = postService;
        this.userService = userService;
        this.profileRepository = profileRepository;
        this.postRepository = postRepository;
    }


    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post postParam){
        return postService.create(postService.generatePost(postParam));
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllPosts(){
        return ResponseEntity.ok(postService.findAllPostByDateDec());
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        return ResponseEntity.ok(postService.fetchPostById(id));
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> postUpdate(@PathVariable Long id, @RequestBody Post post){
        Post existingPost = postService.fetchPostById(id);
        return postService.create(postService.update( post, existingPost));
    }


    @DeleteMapping("/posts/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id){
        postService.deletePostById(id);
    }

    //Method for post sorted by topics
    @GetMapping(value ="/posts",params = {"topic"})
    public ResponseEntity<List<Post>> getPostByTopic(@RequestParam String topic) {
        return ResponseEntity.ok(postService.fetchPostByTopic(topic));
    }

    @GetMapping (value ="/posts" , params = "authorname")
    public ResponseEntity<List<Post>> getPostByAuthorname(@RequestParam String authorname) {
        return ResponseEntity.ok(postService.fetchPostByAuthorname(authorname));
    }

    @GetMapping (value = "/profile" , params = "owner")
    public ResponseEntity<Profile> getProfileByAuthor(@RequestParam String owner){
        User user = userService.findUserByEmail(owner);
        Profile profile = profileRepository.findByOwner(user);
        return ResponseEntity.ok(profile);

    }
    @GetMapping (value = "/posts", params = "author")
    public ResponseEntity<List<Post>> getPostByAuthor(@RequestParam String author) {
        User user = userService.findUserByEmail(author);
        List<Post> posts = postRepository.findByAuthor(user);
        return ResponseEntity.ok(posts);
    }



}
