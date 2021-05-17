package sda.project.posts;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import sda.project.user.User;

import java.util.List;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByTopic(String topic);

    @Query("FROM Post ORDER BY dateCreated DESC")
    List<Post> findAllPostByDateDec();


    List<Post> findByAuthorname(String authorname);


    List<Post> findByAuthor(User author);


}
