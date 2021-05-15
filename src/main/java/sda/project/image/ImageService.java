
package sda.project.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import sda.project.auth.AuthService;
import sda.project.image.Image;
import sda.project.image.ImageRepository;
import sda.project.user.User;
import sda.project.user.UserService;


@Service
public class ImageService {

    ImageRepository imageRepository;
    UserService userService;
    AuthService authService;

    private FileNameHelper fileHelper = new FileNameHelper();

    public ImageService(ImageRepository imageRepository, UserService userService, AuthService authService) {
        this.imageRepository = imageRepository;
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
        Image image = Image.buildImage(file, fileHelper);
        image.setAvatar(userInSession);
        save(image);
        return ResponseEntity.status(HttpStatus.CREATED).body(imageRepository.save(image));
    }

    public ResponseEntity<byte[]> show(){

        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Image image = imageRepository.findByAvatar(userInSession);
        return ResponseEntity.ok().contentType(MediaType.valueOf(image.getFileType())).body(image.getData());

    }

}

