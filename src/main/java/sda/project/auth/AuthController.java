package sda.project.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import sda.project.user.User;
import sda.project.user.UserService;

/**
 * This is a Controller class of Auth Entity
 * which contains methods of User Authentication
 */
@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    /**
     * A method for registration of User
     * @return User will be registered successfully and token will be generated
     */
    @PostMapping("/register")
    public ResponseEntity<?> register(@Validated @RequestBody User user) {
        userService.register(user);

        String token = authService.createAuthToken(user.getEmail());
        AuthResponse authResponse = new AuthResponse(token);

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    /**
     * A method for Authentication  of User
     * @throws Exception when Unauthorized User is found
     */
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthRequest authRequest) {
        try {
            String token = authService.authenticate(authRequest.getEmail(), authRequest.getPassword());
            AuthResponse authResponse = new AuthResponse(token);

            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } catch (AuthenticationException authenticationException) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    @GetMapping("/user")
    public String getUser(){
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        return userInSession.getEmail();
    }
}
