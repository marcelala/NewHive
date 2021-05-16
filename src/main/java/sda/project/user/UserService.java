package sda.project.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;

@Service()
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }


    public void register(User user) {
        String encryptedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        userRepository.save(user);

    }
  public List<User> searchUserByName(String name){
       return userRepository.findByName(name);
    }
  public User getUserById(Long id){
       return userRepository.findById(id);
    }

}
