package sda.project.posts;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
<<<<<<< HEAD
import sda.project.user.User;
=======
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;
>>>>>>> 79f5a846679bc3bb2538ae253629df0a7685ec60

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByTopic(String topic);

    @Query("FROM Post ORDER BY dateCreated DESC")
    List<Post> findAllPostByDateDec();


    List<Post> findByAuthorname(String authorname);

<<<<<<< HEAD
    List<Post> findByAuthor(User author);
=======
>>>>>>> 79f5a846679bc3bb2538ae253629df0a7685ec60

}
