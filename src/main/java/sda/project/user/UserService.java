package sda.project.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;

/**
 * A service class which contains necessary service methods to operate User Entity.
 * @since : 2021-05-04
 */
@Service()
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    /**
     * Creating object of UserRepository
     */
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * A method to get user by EmailId
     * @param email a String which contains User's EmailId
     * @return the details of User of provided EmailId
     */
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    /**
     * A Method to register User in the userRepository
     * @param user
     */
    public void register(User user) {
        String encryptedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        userRepository.save(user);

    }

    /**
     * A Method to search User by name of user
     * @param name a String which contains name of User
     * @return User details of which the name is provided
     */
    public List<User> searchUserByName(String name){
       return userRepository.findByUsername(name);
    }
//   public User getUserById(Long id){
//        return userRepository.findById(id);
//     }

}
