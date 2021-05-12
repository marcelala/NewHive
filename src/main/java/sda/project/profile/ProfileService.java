package sda.project.profile;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;
import sda.project.exception.UnAuthorizedException;
import sda.project.user.User;
import sda.project.user.UserService;

import java.util.Date;

@Service
public class ProfileService {

    ProfileRepository profileRepository;
    UserService userService;
    AuthService authService;

    public ProfileService(ProfileRepository profileRepository, UserService userService, AuthService authService) {
        this.profileRepository = profileRepository;
        this.userService = userService;
        this.authService = authService;
    }

    public ResponseEntity<Profile> create(Profile profile){
        return ResponseEntity.status(HttpStatus.CREATED).body(profileRepository.save(profile));
    }

    public Profile generateProfile(Profile profile) {
        User owner = userService.findUserByEmail(authService.getLoggedInUserEmail());
        profile.setOwner(owner);
        profileRepository.save(profile);
        return profile;

    }

   //public Profile update(Profile profile,Profile updatedProfile)
   // {
     //
       // profile.setSurname(updatedProfile.getSurname());
       // profile.setBio(updatedProfile.getBio());
       // profile.setCountryFrom(updatedProfile.getCountryFrom());
       // profile.setLiveIn(updatedProfile.getLiveIn());
       // profile.setMentorArea(updatedProfile.getMentorArea());
       // profile.setMentor(updatedProfile.isMentor());
       // return profile;
    // }

    public boolean isAuthorized(Profile updateProfile)
    {
        User owner = updateProfile.getOwner();
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        return owner.equals(userInSession);
    }

   public Profile update(Profile profile, Profile updatedProfile)
    { if(isAuthorized(updatedProfile)) {

        updatedProfile.setName(profile.getName());
        updatedProfile.setSurname(profile.getSurname());
        updatedProfile.setBio(profile.getBio());
        updatedProfile.setCountryFrom(profile.getCountryFrom());
        updatedProfile.setLiveIn(profile.getLiveIn());
        updatedProfile.setMentorArea(profile.getMentorArea());
        updatedProfile.setMentor(profile.isMentor());

        return updatedProfile;
    }
    else {
       throw new UnAuthorizedException();
    }

    }
    public Profile fetchProfileById(Long id) {
        return profileRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }



}
