package sda.project.connection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sda.project.profile.Profile;

import java.util.List;

public class ConnectionController {

    private final ConnectionService connectionService;

    @Autowired
    public ConnectionController(ConnectionService connectionService) {
        this.connectionService = connectionService;
    }

   // Find a person by Id
   @GetMapping("/connections/{id}")
   public ResponseEntity<Connection> getConnectionById(@PathVariable Long id) {
       return ResponseEntity.ok(connectionService.fetchConnectionById(id));
   }

   //add a connection
    @PostMapping("/connections")
    public ResponseEntity<Connection> addConnection(@RequestBody Connection connection){
        return connectionService.create(connectionService.generateConnection(connection));
    }

    //get all connection
    @GetMapping("/connections")
    public ResponseEntity<List<Connection>> getAllConnection(){
        return connectionService.fetchAll();
    }

    //delete a connection by id
    @DeleteMapping("/connections/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteConnection(@PathVariable Long id){
        connectionService.removeConnectionById(id);
    }


}
