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
     * @thows UnAuthorized Exception
     */
    //Update a post.
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

    //Generates a post instance from body.
    public Post generatePost(Post postParam){
        Date currentDate = new Date();
        User author = userService.findUserByEmail(authService.getLoggedInUserEmail());
        postParam.setAuthor(author);
        postParam.setAuthorname(author.getName());
        postParam.setDateCreated(currentDate);
        postParam.setLastEdited(currentDate);
        return postParam;
    }

    //to check if the author is authenticated before delete/update requests
    public boolean isAuthorized(Post existingPost){
        User postAuthor = existingPost.getAuthor();
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        return postAuthor.equals(userInSession);
    }

    //fetch all lost by topics
    public List<Post> fetchPostByTopic(String topic){
        return postRepository.findByTopic(topic);
    }

    //fetch all post by latest
    public List<Post> findAllPostByDateDec(){
        return postRepository.findAllPostByDateDec();
    }


    public List<Post> fetchPostByAuthorname(String authorname) {
        return postRepository.findByAuthorname(authorname);
    }



}

