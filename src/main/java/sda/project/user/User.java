package sda.project.user;

import org.hibernate.validator.constraints.Length;
import sda.project.comments.Comment;
import sda.project.follower.Followers;
import sda.project.image.Image;
import sda.project.profile.Profile;
import sda.project.posts.Post;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.Objects;
import java.util.List;

@Entity
@Table(name="account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;

    @Length(min = 8, max=100, message = "Password length most be between 8-100 characters")
    @NotEmpty(message ="Please provide a password")
    @Column(name = "password")
    private String password;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "username",unique = true)
    private String username;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Post> postList;

    @OneToMany(mappedBy = "commentOwner", cascade = CascadeType.ALL)
    private List<Comment> commentList;

    @OneToOne(mappedBy = "owner",cascade = CascadeType.ALL)
    private Profile profile;

    @OneToMany(mappedBy = "to")
    private List<Followers> followings;

    @OneToMany(mappedBy = "from")
    private List<Followers> followers;

    @OneToOne(mappedBy = "avatar",cascade = CascadeType.ALL)
    private Image picture;


    // Hibernate needs a default constructor to function
    public User() {}


    public User(@Email(message = "Invalid email address! Please provide a valid email address")
                @NotEmpty(message = "Please provide an email address") String email,
                @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters")
                @NotEmpty(message ="Please provide a password") String password,
                @Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String name) {
        this.email = email;
        this.password = password;
        this.username = name;

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return username;
    }

    public void setName(String name) {
        this.username = name;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }


   public Image getPicture() {
        return picture;
    }

    public void setPicture(Image picture) {
        this.picture = picture;
    }

    public List<Followers> getFollowings() {
        return followings;
    }

    public void setFollowings(List<Followers> followings) {
        this.followings = followings;
    }

    public List<Followers> getFollowers() {
        return followers;
    }

    public void setFollowers(List<Followers> followers) {
        this.followers = followers;
    }

    /*public void addFollower(User follower){
        followers.add(follower);
        follower.followings.add(this);
    }

    public void unFollow(User follower){
        followers.remove(follower);
        follower.followings.remove(this);
    }

    public boolean isFollower(User follower){
        return followers.contains(follower);
    }

    public boolean isFollowing(User following){
        return followings.contains(following);
    }*/



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
