package sda.project.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import sda.project.auth.AuthService;
import sda.project.exception.UnAuthorizedException;
import sda.project.user.User;
import sda.project.user.UserService;
import javax.validation.Valid;
import java.util.List;

@RestController
public class ProfileController {

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

    @GetMapping("/view-profile/{id}")
    public ResponseEntity<Profile> viewProfileById(@PathVariable Long id) {
        return ResponseEntity.ok(profileService.fetchProfileById(id));
    }

        @GetMapping("/view-profile/{author}")
    public ResponseEntity<Profile> viewProfileByUserName(@PathVariable User author) {
        return ResponseEntity.ok(profileService.fetchProfileByUserName(author));

    }


        @GetMapping("/view-profile/all")
    public ResponseEntity<Profile> listAllProfiles() {
        return ResponseEntity.ok(profileService.listAllUsers());

    }

    @GetMapping(value = "/mentors", params = "mentorArea")
    public ResponseEntity<List<Profile>> getMentorsByMentorArea (@RequestParam String mentorArea){
        return ResponseEntity.ok(profileService.fetchProfileByMentorArea(mentorArea));
    }

    @GetMapping(value ="/mentors", params = "isMentor")
    public ResponseEntity<List<Profile>> getAllMentors (@RequestParam boolean isMentor) {
        return ResponseEntity.ok(profileService.fetchAllMentors(isMentor));
    }




}

