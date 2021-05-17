package sda.project.profile;

import org.springframework.data.jpa.repository.JpaRepository;



import sda.project.user.User;


import java.util.List;

@Repository
public interface ProfileRepository extends JpaRepository<Profile,Long> {

    List<Profile> findByMentorArea (String mentorArea);

    List<Profile> findByIsMentor (boolean isMentor);


    Profile findByOwner (User owner);

}
