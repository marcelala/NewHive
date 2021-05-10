package sda.project.connection;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sda.project.auth.AuthService;
import sda.project.exceptions.ResourceNotFoundException;
import sda.project.exceptions.UnAuthorizedUserException;
import sda.project.posts.Post;
import sda.project.user.User;
import sda.project.user.UserService;

import java.util.List;

@Service
public class ConnectionService {

    ConnectionRepository connectionRepository;
    UserService userService;
    AuthService authService;

    public ConnectionService(ConnectionRepository connectionRepository, UserService userService, AuthService authService) {
        this.connectionRepository = connectionRepository;
        this.userService = userService;
        this.authService = authService;
    }

    public Connection fetchConnectionById(Long id){
        return connectionRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public ResponseEntity<Connection> create(Connection connection){
        return ResponseEntity.status(HttpStatus.CREATED).body(connectionRepository.save(connection));
    }

    public Connection generateConnection(Connection connection) {
        User connected = userService.findUserByEmail(authService.getLoggedInUserEmail());
        connection.setConnection(connected);
        return connection;
    }
    //Fetch all connection in connectionRepo.
    public ResponseEntity<List<Connection>> fetchAll(){
        return ResponseEntity.ok(connectionRepository.findAll());
    }

    public void removeConnectionById(Long id){
        Connection connection = connectionRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        connectionRepository.delete(connection);

    }

}
