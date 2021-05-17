
package sda.project.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import sda.project.auth.AuthService;

import sda.project.profile.Profile;
import sda.project.profile.ProfileRepository;
import sda.project.user.User;
import sda.project.user.UserService;


@Service
public class ImageService {


    ImageRepository imageRepository;
    ProfileRepository profileRepository;
    UserService userService;
    AuthService authService;

    private FileNameHelper fileHelper = new FileNameHelper();

    public ImageService(ImageRepository imageRepository,ProfileRepository profileRepository, UserService userService, AuthService authService) {
        this.imageRepository = imageRepository;
        this.profileRepository = profileRepository;
        this.userService = userService;
        this.authService = authService;
    }

    public Image save(Image image) throws NullPointerException{
        if(image==null)
            throw new NullPointerException("Image is null");
        return (Image) imageRepository.save(image);
    }

    public ResponseEntity<Image> upload(MultipartFile file)
    {
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Profile profile = profileRepository.findByOwner(userInSession);
        Image image = Image.buildImage(file, fileHelper);
        image.setAvatar(profile);
        save(image);
        return ResponseEntity.status(HttpStatus.CREATED).body(imageRepository.save(image));
    }

    public ResponseEntity<byte[]> show(Profile profile){

        Image image = imageRepository.findByAvatar(profile);
        return ResponseEntity.ok().contentType(MediaType.valueOf(image.getFileType())).body(image.getData());

    }

}

