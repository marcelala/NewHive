package sda.project.posts;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByTopic(String topic);

    @Query("FROM Post ORDER BY dateCreated DESC")
    List<Post> findAllPostByDateDec();

<<<<<<< HEAD
=======
    List<Post> findByAuthorname(String authorname);
>>>>>>> c757f2f04b5592b95334bb42f4a9072d98c632aa

}
