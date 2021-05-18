package sda.project.comments;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

/**
 * An interface of CommentRepository which extends JpaRepository
 * @since : 2021-05-06
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByCommentOwner(Long commentOwner);
}