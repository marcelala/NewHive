package sda.project.profile;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;
import sda.project.exception.UnAuthorizedException;
import sda.project.user.User;
import sda.project.user.UserService;

import java.util.List;

/**
 * A service class which contains necessary service methods to operate Profile Entity.
 * @since : 2021-05-08
 */
@Service
public class ProfileService {

    ProfileRepository profileRepository;
    UserService userService;
    AuthService authService;


    /**
     * Creating the object of different class.
     */
    public ProfileService(ProfileRepository profileRepository, UserService userService, AuthService authService) {
        this.profileRepository = profileRepository;
        this.userService = userService;
        this.authService = authService;
    }

    /**
     * A method to create a profile of User
     * @return profile of user will be created
     */
    public ResponseEntity<Profile> create(Profile profile){
        return ResponseEntity.status(HttpStatus.CREATED).body(profileRepository.save(profile));
    }

    /**
     * A method to generate a profile
     * @param profile is an object in which value of all required fields are set for generating profile.
     * @return generated profile.
     */
    public Profile generateProfile(Profile profile) {
        User owner = userService.findUserByEmail(authService.getLoggedInUserEmail());
        profile.setOwner(owner);
        profileRepository.save(profile);
        return profile;
    }

    /**
     * A method to check if the owner of the profile is authenticated before delete/update requests
     * @param updateProfile contains owner of the profile
     * @return if owner is the same User who created profile
     */
    public boolean isAuthorized(Profile updateProfile)
    {
        User owner = updateProfile.getOwner();
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        return owner.equals(userInSession);
    }

    /**
     * A method to update profile in profileRepository of authorized User.
     * @thows UnAuthorized Exception if the owner is unAuthorized
     */
   public Profile update(Profile profile, Profile updatedProfile)
    { if(isAuthorized(updatedProfile)) {

        updatedProfile.setName(profile.getName());
        updatedProfile.setSurname(profile.getSurname());
        updatedProfile.setBio(profile.getBio());
        updatedProfile.setCountryFrom(profile.getCountryFrom());
        updatedProfile.setLiveIn(profile.getLiveIn());
        updatedProfile.setMentorArea(profile.getMentorArea());
        updatedProfile.setIsMentor(profile.getIsMentor());

        return updatedProfile;
    }
    else {
        throw new UnAuthorizedException();
    }
    }

    /**
     * A method to fetch profile by Id of profile.
     * @param id is primary key of profile entity
     * @return profile of provided Id
     * @throws ResourceNotFoundException if profile is not found
     */
    public Profile fetchProfileById(Long id) {
        return profileRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    /**
     * A method to fetch profile by EmailId of User
     * @param owner is a String  which contains EmailId of User
     */
    public Profile fetchProfileByOwner(User owner) {
        return profileRepository.findByOwner(owner);
    }


    /**
     * A method to fetch all profiles sorted by MentorArea
     * @param mentorArea is a String which contains mentorArea and it is the query parameter
     */
    public List<Profile> fetchProfileByMentorArea (String mentorArea) {
        return profileRepository.findByMentorArea(mentorArea);
    }

    /**
     * A method to fetch all profiles sorted by isMentor
     * @param isMentor is a boolean expression which contains if the field is true or false
     */
    public List<Profile> fetchAllMentors (boolean isMentor) {
        return profileRepository.findByIsMentor(isMentor);
    }

}
