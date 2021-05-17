package sda.project.user;

import org.hibernate.validator.constraints.Length;
import sda.project.comments.Comment;
import sda.project.follower.Followers;
import sda.project.profile.Profile;
import sda.project.posts.Post;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.Objects;
import java.util.List;


/** This is a model class which represent
* User Entity and it contains necessary
* fields to create User Entity.
 * @since : 2021-05-04
 */

@Entity
@Table(name="account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;



    // Represents email Id of User.

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;


    // Represents password of User

    @Length(min = 8, max=100, message = "Password length most be between 8-100 characters")
    @NotEmpty(message ="Please provide a password")
    @Column(name = "password")
    private String password;

    // Represents name of User
    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "username",unique = true)
    private String username;

    // Represents List of User's posts
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Post> postList;

    // Represents List of User's comments
    @OneToMany(mappedBy = "commentOwner", cascade = CascadeType.ALL)
    private List<Comment> commentList;

    // Represents User Profile
    @OneToOne(mappedBy = "owner",cascade = CascadeType.ALL)
    private Profile profile;

    @OneToMany(mappedBy="to")
    private List<Followers> followers;

    @OneToMany(mappedBy="from")
    private List<Followers> following;

    // Hibernate needs a default constructor to function
    public User() {}


    /** Creating object of User class.
     * @param email A string that holds the emailId of User
     * @param password A string that holds password of User
     * @param name A string that holds Name of User
     */
    public User(@Email(message = "Invalid email address! Please provide a valid email address")
                @NotEmpty(message = "Please provide an email address") String email,
                @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters")
                @NotEmpty(message ="Please provide a password") String password,
                @Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String name) {
        this.email = email;
        this.password = password;
        this.username = name;

    }

    /** A method to get the id of User
     *
     * @return long id
     */
    public Long getId() {
        return id;
    }

    /**
     *  A method to set the id of User
      */
    public void setId(Long id) {
        this.id = id;
    }

    /** A method to get the Email of User
     *
     * @return String which contains email
     */
    public String getEmail() {
        return email;
    }

    /**
     * A method to set the Email of User
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /** A method to get the Password of User
     *
     * @return String which contains password
     */
    public String getPassword() {
        return password;
    }

    /**
     * A method to set the Password of User
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /** A method to get the Name of User
     *
     * @return String which contains Name of User
     */
    public String getName() {
        return username;
    }

    /**
     * A method to set the Name of User
     */
    public void setName(String name) {
        this.username = name;
    }

    /** A method to get the Profile of User
     *
     * @return String which contains Profile of User
     */
    public Profile getProfile() {
        return profile;
    }

    /**
     * A method to set the Profile of User
     */
    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    public List<Followers> getFollowers() {
        return followers;
    }

    public void setFollowers(List<Followers> followers) {
        this.followers = followers;
    }

    public List<Followers> getFollowing() {
        return following;
    }

    public void setFollowing(List<Followers> following) {
        this.following = following;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(getId(), user.getId()) && Objects.equals(getEmail(), user.getEmail()) && Objects.equals(getPassword(), user.getPassword()) && Objects.equals(getName(), user.getName()) && Objects.equals(getProfile(), user.getProfile());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getEmail(), getPassword(), getName(), getProfile());
    }
}
