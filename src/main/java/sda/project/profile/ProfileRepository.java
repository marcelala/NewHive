package sda.project.profile;

import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface ProfileRepository extends JpaRepository<Profile,Long> {

    List<Profile> findByMentorArea (String mentorArea);

    List<Profile> findByIsMentor (boolean isMentor);
}
