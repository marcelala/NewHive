
package sda.project.image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sda.project.profile.Profile;


@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {

    Image findByAvatar(Profile profile);

}

