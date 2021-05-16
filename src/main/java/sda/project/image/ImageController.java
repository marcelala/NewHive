
package sda.project.image;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class ImageController {

    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<Image> uploadPicture(@RequestParam("file") MultipartFile file) {
        return imageService.upload(file);
    }

    @GetMapping("/show")
    public ResponseEntity<byte[]> showPicture(){
        return imageService.show();
    }
}


