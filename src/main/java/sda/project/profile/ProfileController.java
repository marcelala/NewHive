package sda.project.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sda.project.auth.AuthService;
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

    @PostMapping("/create-profile")
    public ResponseEntity<Profile> createProfile(@Valid @RequestBody Profile profile){
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        profile.setOwner(userInSession);
        profileRepository.save(profile);
        return ResponseEntity.status(HttpStatus.CREATED).body(profile);
    }

    @PutMapping("/edit-profile")
    public ResponseEntity<Profile> editProfile(@Valid @RequestBody Profile updatedProfile)
    {
        if(profileService.isAuthorized(updatedProfile))
        {
            User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
            Profile profile = userInSession.getProfile();
            profile.setName(updatedProfile.getName());
            profileRepository.save(profileService.update(profile, updatedProfile));
            return ResponseEntity.ok(profile);
        }
        else {
            throw  new UnAuthorizedException();
        }
    }

    @GetMapping("/view-profile")
    public ResponseEntity<Profile> viewProfile(){
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Profile profile = userInSession.getProfile();
        return ResponseEntity.ok(profile);
    }
}

