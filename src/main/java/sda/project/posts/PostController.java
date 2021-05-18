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

/** This is a Controller class of Post Entity which contains methods of Post Entity.
 * @since : 2021-05-06
 */
@RestController
public class PostController {
    private final PostService postService;
    private UserService userService;
    private ProfileRepository profileRepository;
    private PostRepository postRepository;

    /**
     * Creating the object of different class.
     */
    @Autowired
    public PostController(PostService postService, UserService userService, ProfileRepository profileRepository, PostRepository postRepository) {
        this.postService = postService;
        this.userService = userService;
        this.profileRepository = profileRepository;
        this.postRepository = postRepository;
    }

    /**
     * A method to create the post.
     * @param postParam is automatically serialized into JSON and passed back into the HttpResponse object.
     * @return post will be generated.
     */
    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post postParam){
        return postService.create(postService.generatePost(postParam));
    }

    /**
     * A method to get all posts.
     * @return all posts wil be sorted by date descending order.
     */
    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllPosts(){
        return ResponseEntity.ok(postService.findAllPostByDateDec());
    }

    /**
     * A method to get post by Id of post.
     * @param id is primary key of post entity
     * @return post of provided Id
     */
    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        return ResponseEntity.ok(postService.fetchPostById(id));
    }

    /**
     * A method for editing the post.
     * @param id is primary key of post entity
     * @param post is automatically serialized into JSON and passed back into the HttpResponse object.
     * @return an updated post
     */
    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> postUpdate(@PathVariable Long id, @RequestBody Post post){
        Post existingPost = postService.fetchPostById(id);
        return postService.create(postService.update( post, existingPost));
    }

    /**
     * A method for deleting post
     * @param id is the primary key of post entity
     */
    @DeleteMapping("/posts/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id){
        postService.deletePostById(id);
    }

    /**
     * A method to get post sorted by Topics
     * @param topic is a String which contains topic of post and it is the query parameter
     * @return with fetching post of provided topic in the query
     */
    @GetMapping(value ="/posts",params = {"topic"})
    public ResponseEntity<List<Post>> getPostByTopic(@RequestParam String topic) {
        return ResponseEntity.ok(postService.fetchPostByTopic(topic));
    }

    /**
     * A Method to fetch post by authorname
     * @param authorname is a string which contains authorname and is the query parameter
     * @return with fetching post of provided authorname in the query
     */
    @GetMapping (value ="/posts" , params = "authorname")
    public ResponseEntity<List<Post>> getPostByAuthorname(@RequestParam String authorname) {
        return ResponseEntity.ok(postService.fetchPostByAuthorname(authorname));
    }

    /**
     * A method to get profile by EmailId of Registered User
     * @param owner is a String which contains emailId of Registered User and it is the query parameter
     * @return with fetching profile of User of provided EmailId in the query
     */
    @GetMapping (value = "/profile" , params = "owner")
    public ResponseEntity<Profile> getProfileByAuthor(@RequestParam String owner){
        User user = userService.findUserByEmail(owner);
        Profile profile = profileRepository.findByOwner(user);
        return ResponseEntity.ok(profile);

    }

    /**
     * A method to fetch all posts by EmailId of Registered User
     * @param author is a String which contains emailId of Registered User and it is the query parameter
     * @return with fetching all posts of User of provided EmailId in the query
     */
    @GetMapping (value = "/posts", params = "author")
    public ResponseEntity<List<Post>> getPostByAuthor(@RequestParam String author) {
        User user = userService.findUserByEmail(author);
        List<Post> posts = postRepository.findByAuthor(user);
        return ResponseEntity.ok(posts);
    }



}
