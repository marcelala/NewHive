package sda.project.comments;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import sda.project.posts.Post;
import sda.project.user.User;

import javax.validation.constraints.NotNull;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;


/** This is a model class which represent
 * comment Entity and it contains necessary
 * fields to create Comment Entity.
 * @since : 2021-05-06
 */
@Entity
public class Comment {

    /**
     * Represents the id of Comment.
     * It is the primary key of Comment Entity
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Represents a String which contains body of the comment
     * This field must not be Empty
     */
    @NotEmpty
    @Column( length =500, nullable = false)
    private String body;

    /**
     *  Represents the Date when the comment is edited
     */
    private Date updated;

    /**
     * Represents the Date when the comment is created
     */
    private Date created;

    @PrePersist
    protected void onCreate() {
        created = new Date();
    }


    /**
     * Represents mapping of Comments and Post
     * @ManytoOne Represents One Post can have Multiple Comments.
     * Comments and Post are mapped by id.
     */
    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @NotNull
    @JoinColumn(nullable = false)
    private Post commentOwner;

    /**
     * Represents a String which contains AuthorName of the comment
     */
    private String authorname;


    /**
     * Represents mapping of User and Comments
     * @ManyToOne Represents List of User's comments.
     * Registered EmailId is the mapping Entity for User and Comment.
     */
    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @JsonIdentityReference(alwaysAsId = true)
    @NotNull
    private User userCommentOwner;

    @PreUpdate
    protected void onUpdate() {
        updated = new Date();
    }

    /**
     * Hibernate needs a default constructor to function
     */
    public Comment() {
    }


    public Comment(String body) {
        this.body = body;
    }

    /** A method to get the Body of Comment
     *
     * @return a String which contains Body of Comment
     */
    public String getBody() {
        return body;
    }

    /**
     * Amentod to set body of Comment
     */
    public void setBody(String body) {
        this.body = body;
    }

    /** A method to get the id of Comment
     *
     * @return a long id
     */
    public Long getId() {
        return this.id;
    }

    /**
     *  A method to set the id of Post
     */
    public void setId(Long id) {
        this.id = id;
    }

    /** A method to get the id of Comment
     *
     * @return a long id
     */
    public Post getCommentOwner() {
        return this.commentOwner;
    }

    /**
     *  A method to set the id of Post
     */
    public void setCommentOwner(Post commentOwner) {
        this.commentOwner = commentOwner;
    }

    /** A method to get the Owner of Comment
     *
     * @return a String which contains EmailId of Owner of Comment
     */
    public User getUserCommentOwner() {
        return this.userCommentOwner;
    }

    /**
     * A method to set the Owner of Comment
     */
    public void setUserCommentOwner(User userCommentOwner) {
        this.userCommentOwner = userCommentOwner;
    }

    /** A method to get the date of comment Created
     *
     * @return DateCreated
     */
    public Date getCreated() {
        return this.created;
    }

    /**
     * A method to set the date of comment Created
     */
    public void setCreated(Date created) {
        this.created = created;
    }

    /** A method to get the date of comment Edited
     *
     * @return DateEdited
     */
    public Date getUpdated() {
        return this.updated;
    }

    /**
     * A method to set the date of Post Edited
     */
    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    /**
     * A method to get Authorname of comment
     * @return a String which contains Authorname
     */
    public String getAuthorname() {
        return authorname;
    }

    /**
     * A method to set the AuthorName of comment
     */
    public void setAuthorname(String authorname) {
        this.authorname = authorname;
    }
}