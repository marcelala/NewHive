package sda.project.profile;

import org.springframework.data.jpa.repository.JpaRepository;
import sda.project.user.User;

import java.util.List;

public interface ProfileRepository extends JpaRepository<Profile,Long> {

    List<Profile> findByMentorArea (String mentorArea);
}
