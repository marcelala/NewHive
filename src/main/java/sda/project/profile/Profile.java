package sda.project.profile;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.validation.annotation.Validated;
import sda.project.image.Image;
import sda.project.user.User;

import javax.persistence.*;

/** This is a model class which represent
 * Post Entity and it contains necessary
 * fields to create Post Entity.
 * @since : 2021-05-08
 */
@Validated
@Entity
@Table(name="profile")
public class Profile {

    /**
     * Represents the id of Profile.
     * It is the primary key of Profile Entity
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    /**
     * A String contains name of User.
     */
    @Column(name = "name")
    private String name;

    /**
     * A String contains surname of User.
     */
    @Column(name = "surname")
    private String surname;

    /**
     * A string contains the information of User coming from which Country.
     */
    @Column(name = "countryFrom")
    private String countryFrom;

    /**
     * A string contains the information of livein location of User .
     */
    @Column(name = "liveIn")
    private String liveIn;

    /**
     * A String contains bio of User.
     */
    @Column(name = "bio")
    private String bio;

    /**
     * Represents a boolean expression if User is ready to mentor or not
     */
    @Column(name = "isMentor")
    private boolean isMentor;

    /**
     * A String contains MentorShip Area in which User can select to mentor.
     */
    @Column(name = "mentorArea")
    private String mentorArea;

    /**
     * Represents mapping of User and Profile Entity
     * @OnetoOne Represents User has a profile
     * Registered EmailId is the mapping Entity for User and Profile.
     */
    @OneToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @JsonIdentityReference(alwaysAsId = true)
    private User owner;

    /**
     * Represents mapping of User and Image Entity
     * @OnetoOne Represents User has a profile picture
     * Registered EmailId is the mapping Entity for User and Image.
     */
    @OneToOne(mappedBy = "avatar",cascade = CascadeType.ALL)
    private Image picture;

    /**
     * Hibernate needs a default constructor to function
     */
    public Profile(){

    }

    public Profile( String name, String surname, String countryFrom, String liveIn, String bio, boolean isMentor, String mentorArea) {
        this.name = name;
        this.surname = surname;
        this.countryFrom = countryFrom;
        this.liveIn = liveIn;
        this.bio = bio;
        this.isMentor = isMentor;
        this.mentorArea = mentorArea;
    }

    /** A method to get the id of Profile
     *
     * @return a long id
     */
    public Long getId() {
        return id;
    }

    /**
     *  A method to set the id of Profile
     */
    public void setId(Long id) {
        this.id = id;
    }

    /** A method to get the Name of User
     *
     * @return String which contains Name of User
     */
    public String getName() {
        return name;
    }

    /**
     * A method to set the Name of User
     */
    public void setName(String name) {
        this.name = name;
    }


    /** A method to get the SurName of User
     *
     * @return String which contains SurName of User
     */
    public String getSurname() {
        return surname;
    }

    /**
     * A method to set the SurName of User
     */
    public void setSurname(String surname) {
        this.surname = surname;
    }

    /**
     * A method to get the information of User coming from which Country.
     * @return String which contains Country of User
     */
    public String getCountryFrom() {
        return countryFrom;
    }

    /**
     * A method to set the CountryFrom information of User
     */
    public void setCountryFrom(String countryFrom) {
        this.countryFrom = countryFrom;
    }

    /**
     * A method to get the information of livein location of User
     * @return String which contains User's current location
     */
    public String getLiveIn() {
        return liveIn;
    }

    /**
     * A method to set the CountryFrom information of User
     */
    public void setLiveIn(String liveIn) {
        this.liveIn = liveIn;
    }

    /**
     * A method to get the bio of User
     * @return String which contains bio of User
     */
    public String getBio() {
        return bio;
    }

    /**
     * A method to set the bio of User
     */
    public void setBio(String bio) {
        this.bio = bio;
    }

    /**
     * A method to get if User is mentoring or not
     */
    public boolean getIsMentor() {
        return isMentor;
    }


    /**
     * A method to set if User is mentoring or not
     */
    public void setIsMentor(boolean mentor) {

        this.isMentor = mentor;
    }


    /**
     * A method to get MentorArea of User
     * @return a string contains User's MentorArea
     */
    public String getMentorArea() {
        return mentorArea;
    }

    /**
     * A method to set MentorArea of User
     */
    public void setMentorArea(String mentorArea) {
        this.mentorArea = mentorArea;
    }

    /**
     * A method to get email of User
     * @return a string contains User's emailId
     */
    public User getOwner() {
        return owner;
    }

    /**
     * A method to set Email of User
     */
    public void setOwner(User owner) {
        this.owner = owner;
    }


    /**
     * A method to get Picture of User
     * @return a string contains Picture of User
     */
    public Image getPicture() {
        return picture;
    }

   /**
    * A method to set Picture of User
    */
    public void setPicture(Image picture) {
        this.picture = picture;
    }

    /**
     * A method to To be used in comparing the profile owner with the user in session
     * @return a String which contains the owner is same as profileOwner
     */
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Profile profile = (Profile) o;
        return owner.equals(profile.owner);
    }


}
