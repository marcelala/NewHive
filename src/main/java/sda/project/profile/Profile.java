package sda.project.profile;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.validation.annotation.Validated;
import sda.project.user.User;

import javax.persistence.*;

@Validated
@Entity
@Table(name="profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "countryFrom")
    private String countryFrom;


    @Column(name = "liveIn")
    private String liveIn;

    @Column(name = "bio")
    private String bio;

    @Column(name = "isMentor")
    private boolean isMentor;

    @Column(name = "mentorArea")
    private String mentorArea;

    @OneToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @JsonIdentityReference(alwaysAsId = true)
    private User owner;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getCountryFrom() {
        return countryFrom;
    }

    public void setCountryFrom(String countryFrom) {
        this.countryFrom = countryFrom;
    }

    public String getLiveIn() {
        return liveIn;
    }

    public void setLiveIn(String liveIn) {
        this.liveIn = liveIn;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public boolean getIsMentor() {
        return isMentor;
    }

    public void setIsMentor(boolean mentor) {
        isMentor = mentor;
    }

    public String getMentorArea() {
        return mentorArea;
    }

    public void setMentorArea(String mentorArea) {
        this.mentorArea = mentorArea;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Profile profile = (Profile) o;
        return owner.equals(profile.owner);
    }
}
