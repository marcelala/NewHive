package sda.project.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * An interface of UserRepository which extends JpaRepository
 * @since : 2021-05-04
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * A Method to find User by Email
     * @param email A String contains email of User
     */
    User findByEmail(String email);
  
  /**
     * A Method to find User by Name
     * @param name A String contains Name of User
     */
  List<User> findByUsername(String name);


}
