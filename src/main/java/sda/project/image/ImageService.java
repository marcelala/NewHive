
package sda.project.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sda.project.image.Image;
import sda.project.image.ImageRepository;


@Service
public class ImageService {

    @Autowired
    ImageRepository imageRepository;

    public Image save(Image image) throws NullPointerException{
        if(image==null)
            throw new NullPointerException("Image is null");
        return (Image) imageRepository.save(image);

    }

}

