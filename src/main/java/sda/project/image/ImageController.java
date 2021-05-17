
package sda.project.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sda.project.exception.ResourceNotFoundException;
import sda.project.profile.Profile;
import sda.project.profile.ProfileRepository;


@RestController
public class ImageController {

    private final ImageService imageService;
    private ProfileRepository profileRepository;

    @Autowired
    public ImageController(ImageService imageService, ProfileRepository profileRepository) {
        this.imageService = imageService;
        this.profileRepository = profileRepository;
    }

    @PostMapping("/upload")
    public ResponseEntity<Image> uploadPicture(@RequestParam("file") MultipartFile file) {
        return imageService.upload(file);
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<byte[]> showPicture(@PathVariable Long id){
        Profile profile = profileRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return imageService.show(profile);
    }
}


