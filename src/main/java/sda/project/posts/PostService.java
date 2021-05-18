package sda.project.posts;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;
import sda.project.exception.UnAuthorizedException;
import sda.project.user.User;
import sda.project.user.UserService;
import java.util.Date;
import java.util.List;

/**
 * A service class which contains necessary service methods to operate Post Entity.
 * @since : 2021-05-06
 */
@Service
public class PostService {

    PostRepository postRepository;
    UserService userService;
    AuthService authService;

    /**
     * Creating the object of different class.
     */
    public PostService(PostRepository postRepository, UserService userService, AuthService authService){

        this.postRepository = postRepository;
        this.userService = userService;
        this.authService = authService;
    }

    /**
     * A method to save post in postRepository.
     * @return created post will be saved in postRepository
     */
    public ResponseEntity<Post> create(Post postParam){
        return ResponseEntity.status(HttpStatus.CREATED).body(postRepository.save(postParam));
    }

    /**
     * A method to fetch all posts in postRepository.
     * @return fetching all post in the postRepository
     */
    public ResponseEntity<List<Post>> fetchAll(){
        return ResponseEntity.ok(postRepository.findAll());
    }

    /**
     * A method to Fetch post by id in postRepository.
     * @return fetching post in the postRepository by provided id in the query
     */
    public Post fetchPostById(Long idParam){
        return postRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
    }

    /**
     * A method to delete post by id for authorized user.
     * @param idParam is id which is query parameter to delete the post
     */
    public void deletePostById(Long idParam){
        Post post = postRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
        if (isAuthorized(post)) {
            postRepository.delete(post);
        } else {
            throw new UnAuthorizedException();
        }

    }

    /**
     * A method to update post in postRepository by authorized User.
     * @thows UnAuthorized Exception if the author is unAuthorized
     */
    public Post update(Post postUpdate, Post existingPost){
        if(isAuthorized(existingPost)){
            existingPost.setBody(postUpdate.getBody());
            existingPost.setTitle(postUpdate.getTitle());
            existingPost.setTopic(postUpdate.getTopic());   
            existingPost.setLastEdited(new Date());
            return existingPost;
        } else {
            throw new UnAuthorizedException();
        }
    }

    /**
     * A method to generate a post instance from body.
     * @param postParam is an object in which value of all required fields are set for generating post.
     * @return generated post.
     */
    public Post generatePost(Post postParam){
        Date currentDate = new Date();
        User author = userService.findUserByEmail(authService.getLoggedInUserEmail());
        postParam.setAuthor(author);
        postParam.setAuthorname(author.getName());
        postParam.setDateCreated(currentDate);
        postParam.setLastEdited(currentDate);
        return postParam;
    }

    /**
     * A method to check if the author of the post is authenticated before delete/update requests
     * @param existingPost contains author of the post
     * @return if author is the same User who created post
     */
    public boolean isAuthorized(Post existingPost){
        User postAuthor = existingPost.getAuthor();
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        return postAuthor.equals(userInSession);
    }


    /**
     * A method to get post sorted by Topics
     * @param topic is a String which contains topic of post and it is the query parameter
     * @return with fetching post of provided topic in the query
     */
    public List<Post> fetchPostByTopic(String topic){
        return postRepository.findByTopic(topic);
    }

    /**
     * A method to get all posts.
     * @return all posts wil be sorted by date descending order.
     */
    public List<Post> findAllPostByDateDec(){
        return postRepository.findAllPostByDateDec();
    }

    /**
     * A Method to fetch post by authorname
     * @param authorname is a string which contains authorname and is the query parameter
     * @return with fetching post of provided authorname in the query
     */
    public List<Post> fetchPostByAuthorname(String authorname) {
        return postRepository.findByAuthorname(authorname);
    }

    /**
     * A method to fetch all posts by EmailId of Registered User
     * @param author is a String which contains emailId of Registered User and it is the query parameter
     * @return with fetching all posts of User of provided EmailId in the query
     */
    public List<Post> fetchPostByAuthor(User author) {
        return postRepository.findByAuthor(author);
    }



}

