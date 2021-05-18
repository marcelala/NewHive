package sda.project.posts;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sda.project.user.User;
import java.util.List;


/**
 * An interface of PostRepository which extends JpaRepository
 * @since : 2021-05-06
 */
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    /**
     * A method to get post sorted by Topics
     * @param topic is a String which contains topic of post and it is the query parameter
     * @return with fetching post of provided topic in the query
     */
    List<Post> findByTopic(String topic);

    /**
     * A method to get all posts.
     * @return all posts wil be sorted by date descending order.
     */
    @Query("FROM Post ORDER BY dateCreated DESC")
    List<Post> findAllPostByDateDec();

    /**
     * A Method to fetch post by authorname
     * @param authorname is a string which contains authorname and is the query parameter
     * @return with fetching post of provided authorname in the query
     */
    List<Post> findByAuthorname(String authorname);

    /**
     * A method to fetch all posts by EmailId of Registered User
     * @param author is a String which contains emailId of Registered User and it is the query parameter
     * @return with fetching all posts of User of provided EmailId in the query
     */
    List<Post> findByAuthor(User author);





}
