package sda.project.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;
import sda.project.exception.UnAuthorizedException;
import sda.project.user.User;
import sda.project.user.UserService;
import javax.validation.Valid;
import java.util.List;

/** This is a Controller class of Profile
 * Entity which contains methods of Profile Entity.
 * @since : 2021-05-08
 */
@RestController
public class ProfileController {


    ProfileRepository profileRepository;

    AuthService authService;
    UserService userService;
    ProfileService profileService;

    /**
     * Creating the object of different class.
     */
    @Autowired
    public ProfileController(ProfileRepository profileRepository,AuthService authService,UserService userService,ProfileService profileService){
        this.profileRepository = profileRepository;
        this.authService  = authService;
        this.userService = userService;
        this.profileService = profileService;
    }

    /**
     * A method to create a profile of User
     * @return profile of user will be created
     */
    @PostMapping("create-profile")
    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile){
        return profileService.create(profileService.generateProfile(profile));

    }

    /**
     * A method to view profile of User who has registered and created profile.
     * @return profile of User.
     */
    @GetMapping("/view-profile")
    public ResponseEntity<Profile> viewProfile(){
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Profile profile = userInSession.getProfile();
        return ResponseEntity.ok(profile);
    }

    /**
     * A method for editing the profile.
     * @param id is primary key of profile entity
     * @param profile is automatically serialized into JSON and passed back into the HttpResponse object.
     * @return an updated profile
     */
    @PutMapping("/edit-profile/{id}")
    public ResponseEntity<Profile> profileUpdate (@PathVariable Long id, @RequestBody Profile profile) {
        Profile updatedProfile = profileService.fetchProfileById(id);
        return profileService.create(profileService.update(profile, updatedProfile));
    }

    /**
     * A method to get profile by Id of profile.
     * @param id is primary key of profile entity
     * @return profile of provided Id
     */
    @GetMapping("/view-profile/{id}")
    public ResponseEntity<Profile> viewProfileById(@PathVariable Long id) {
        return ResponseEntity.ok(profileService.fetchProfileById(id));
    }


    /**
     * A method to get profile by EmailId of User.
     * @param email is a String which contains EmailId of User and it is the query parameter
     * @return profile of provided EmailId of User
     */
    @GetMapping("/view-profile-by-email/{email}")
    public ResponseEntity<Profile> viewProfileByEmail(@PathVariable String email) {
        User user = userService.findUserByEmail(email);
        return ResponseEntity.ok(profileService.fetchProfileByOwner(user));
    }

    /**
     * A method to get profile sorted by MentorArea
     * @param mentorArea is a String which contains mentorArea and it is the query parameter
     * @return with fetching profile of provided mentorArea in the query
     */
    @GetMapping(value = "/mentors", params = "mentorArea")
    public ResponseEntity<List<Profile>> getMentorsByMentorArea (@RequestParam String mentorArea){
        return ResponseEntity.ok(profileService.fetchProfileByMentorArea(mentorArea));
    }

    /**
     * A method to get profile sorted by isMentor
     * @param isMentor is a boolean expression which contains if the field is true or false
     * @return with fetching profile of provided expression of isMentor in the query
     */
    @GetMapping(value ="/mentors", params = "isMentor")
    public ResponseEntity<List<Profile>> getAllMentors (@RequestParam boolean isMentor) {
        return ResponseEntity.ok(profileService.fetchAllMentors(isMentor));
    }




}

