package sda.project.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;
import sda.project.exception.UnAuthorizedException;
import sda.project.user.User;
import sda.project.user.UserService;
import javax.validation.Valid;

@RestController
public class ProfileController {

    @Autowired
    ProfileRepository profileRepository;

    AuthService authService;
    UserService userService;
    ProfileService profileService;

    @Autowired
    public ProfileController(ProfileRepository profileRepository,AuthService authService,UserService userService,ProfileService profileService){
        this.profileRepository = profileRepository;
        this.authService  = authService;
        this.userService = userService;
        this.profileService = profileService;
    }

    @PostMapping("create-profile")
    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile){
        return profileService.create(profileService.generateProfile(profile));

    }

    @GetMapping("/view-profile")
    public ResponseEntity<Profile> viewProfile(){
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Profile profile = userInSession.getProfile();
        return ResponseEntity.ok(profile);
    }

    @PutMapping("/edit-profile/{id}")
    public ResponseEntity<Profile> profileUpdate (@PathVariable Long id, @RequestBody Profile profile) {
        Profile updatedProfile = profileService.fetchProfileById(id);
        return profileService.create(profileService.update(profile, updatedProfile));
    }

}

