
package sda.project.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sda.project.auth.AuthService;
import sda.project.user.User;
import sda.project.user.UserService;

@RestController
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    ImageService imageService;

    UserService userService;
    AuthService authService;

    private FileNameHelper fileHelper = new FileNameHelper();

    @PostMapping("/upload")
    public ResponseEntity<Image> uploadPicture(@RequestParam("file") MultipartFile file) {
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Image image = Image.buildImage(file, fileHelper);
        image.setAvatar(userInSession);
        imageService.save(image);
        return  ResponseEntity.status(HttpStatus.CREATED).body(image);
    }

    @GetMapping("/show")
    public ResponseEntity<byte[]> showPicture(){
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        Image image = imageRepository.findByAvatar(userInSession);
        return ResponseEntity.ok().contentType(MediaType.valueOf(image.getFileType())).body(image.getData());
    }
}


