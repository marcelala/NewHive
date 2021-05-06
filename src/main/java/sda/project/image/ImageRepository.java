
package sda.project.image;

import org.springframework.data.jpa.repository.JpaRepository;
import sda.project.user.User;


public interface ImageRepository extends JpaRepository<Image,Long> {

    Image findByAvatar(User user);

}

