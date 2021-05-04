package sda.project.profile;

import org.springframework.validation.annotation.Validated;

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

    @Column(name = "surName")
    private String surName;

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

    public Profile(){

    }

    public Profile( String name, String surName, String countryFrom, String liveIn, String bio, boolean isMentor, String mentorArea) {
        this.name = name;
        this.surName = surName;
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

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
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

    public boolean isMentor() {
        return isMentor;
    }

    public void setMentor(boolean mentor) {
        isMentor = mentor;
    }

    public String getMentorArea() {
        return mentorArea;
    }

    public void setMentorArea(String mentorArea) {
        this.mentorArea = mentorArea;
    }
}
