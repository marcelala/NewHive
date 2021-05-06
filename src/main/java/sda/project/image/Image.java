
package sda.project.image;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.Type;
import org.springframework.web.multipart.MultipartFile;
import sda.project.user.User;

import javax.persistence.*;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Entity
@Table(name = "tbl_image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "uuid")
    private String uuid;

    @OneToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @JsonIdentityReference(alwaysAsId = true)
    private User avatar;

    @Lob
    @Column(name = "data")
    @Type(type = "org.hibernate.type.BinaryType")
    private byte[] data;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public User getAvatar() {
        return avatar;
    }

    public void setAvatar(User avatar) {
        this.avatar = avatar;
    }


    @Transient
    public static Image build() {
        String uuid = UUID.randomUUID().toString();
        Image image = new Image();
        image.setUuid(uuid);
        return image;
    }

    @Transient
    public void setFiles(MultipartFile file) {
        setFileType(file.getContentType());
    }




/**
     * @param fileName - filename of the resources.
     *
     * @return inputstream for image
     *
    **/


    private static InputStream getResourceFileAsInputStream(String fileName) {
        ClassLoader classLoader = Image.class.getClassLoader();
        return classLoader.getResourceAsStream(fileName);
    }

    @Transient
    public static Image buildImage(MultipartFile file, FileNameHelper helper) {
        String fileName = helper.generateDisplayName(file.getOriginalFilename());

        Image image = Image.build();
        image.setFileName(fileName);
        image.setFiles(file);

        try {
            image.setData(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return image;
    }


}


