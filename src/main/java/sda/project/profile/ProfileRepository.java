package sda.project.profile;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;
import sda.project.user.User;


import java.util.List;

/**
 * An interface of ProfileRepository which extends JpaRepository
 * @since : 2021-05-08
 */
@Repository
public interface ProfileRepository extends JpaRepository<Profile,Long> {

    /**
     * A method to get profile sorted by MentorArea
     * @param mentorArea is a String which contains mentorArea and it is the query parameter
     */
    List<Profile> findByMentorArea (String mentorArea);

    /**
     * A method to get profile sorted by isMentor
     * @param isMentor is a boolean expression which contains if the field is true or false
     */
    List<Profile> findByIsMentor (boolean isMentor);

    /**
     * A method to get profile by EmailId of User
     * @param owner is a String  which contains EmailId of User
     */
    Profile findByOwner (User owner);


}
