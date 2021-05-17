package sda.project.posts;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import sda.project.user.User;
import sda.project.comments.Comment;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.Objects;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

/** This is a model class which represent
 * Post Entity and it contains necessary
 * fields to create Post Entity.
 * @since : 2021-05-06
 */
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Represents the Date when the Post is created
    private Date dateCreated;

    // Represents the Date when the Post is edited
    private Date lastEdited;

    /**
     * Represents a String which contains Tittle of the post
     * This field must not be Empty
     */
    @Column(nullable = false)
    @NotEmpty(message = "Please provide a valid post tittle")
    private String title;

    /**
     * Represents a String which contains body of the post
     * This field must not be Empty
     */
    @Column(length = 2000, nullable = false)
    @NotEmpty(message = "Please provide a valid post body")
    private String body;

    /**
     * Represents a String which contains topic of the post
     * This field must not be Empty
     */
    @Column(nullable = false)
    @NotEmpty(message = "Please provide a valid post topic")
    private String topic;

    /**
     * Represents a String which contains AuthorName of the post
     */
    private String authorname;


    /**
     * Represents mapping of User and Post
     * @ManytoOne Represents One User can have Multiple Posts.
     * Registered EmailId is the mapping Entity for User and post.
     */
    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @JsonIdentityReference(alwaysAsId = true)
    private User author;

    /**
     * Represents mapping of Comments and Post
     * @OneToMany Represents One Post can have Multiple Comments.
     * Comments and Post are mapped by id.
     */
    @OneToMany(mappedBy = "commentOwner", cascade = CascadeType.ALL)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private List<Comment> comments;

    public Post() {

    }

    public Post(Long id, Date dateCreated, Date lastEdited,
                @NotEmpty(message = "Please provide a valid post tittle") String title,
                @NotEmpty(message = "Please provide a valid post body") String body,
                @NotEmpty(message = "Please provide a valid post topic") String topic, User author, String authorname) {
        this.id = id;
        this.dateCreated = new Date();
        this.lastEdited = this.dateCreated;
        this.title = title;
        this.body = body;
        this.topic = topic;
        this.author = author;
        this.authorname = authorname;

    }

    /** A method to get the id of Post
     *
     * @return a long id
     */
    public Long getId() {
        return id;
    }

    /**
     *  A method to set the id of Post
     */
    public void setId(Long id) {
        this.id = id;
    }

    /** A method to get the date of Post Created
     *
     * @return DateCreated
     */
    public Date getDateCreated() {
        return dateCreated;
    }

    /**
     * A method to set the date of Post Created
     */
    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    /** A method to get the date of Post Edited
     *
     * @return DateEdited
     */
    public Date getLastEdited() {
        return lastEdited;
    }

    /**
     * A method to set the date of Post Edited
     */
    public void setLastEdited(Date lastEdited) {
        this.lastEdited = lastEdited;
    }

    /** A method to get the Title of Post
     *
     * @return a String which contains Title of Post
     */
    public String getTitle() {
        return title;
    }

    /**
     * A method to set the Tittle of Post
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /** A method to get the Body of Post
     *
     * @return a String which contains Body of Post
     */
    public String getBody() {
        return body;
    }

    /**
     * A method to set the Body of Post
     */
    public void setBody(String body) {
        this.body = body;
    }

    /** A method to get the Topic of Post
     *
     * @return a String which contains Topic of Post
     */
    public String getTopic() {
        return topic;
    }

    /**
     * A method to set the Topic of Post
     */
    public void setTopic(String topic) {
        this.topic = topic;
    }


    /** A method to get the AuthorName of Post
     *
     * @return a String which contains AuthorName of Post
     */
    public String getAuthorName() {
        return authorname;
    }

    /**
     * A method to set the AuthorName of Post
     */
    public void setAuthorName(String authorName) {
        this.authorname = authorname;
    }

    /** A method to get the Author of Post
     *
     * @return a String which contains Author of Post
     */
    public User getAuthor() {
        return author;
    }

    /**
     * A method to set the Author of Post
     */
    public void setAuthor(User author) {
        this.author = author;
    }

    /** A method to get the Comments of Post
     *
     * @return list of comments
     */
    public List<Comment> getComments() {
        return this.comments;
    }

    /**
     * A method to set the comments of Post
     */
    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public String getAuthorname() {
        return authorname;
    }

    public void setAuthorname(String authorname) {
        this.authorname = authorname;
    }

    //To be used in comparing the post author with the user in session
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return author.equals(post.author);
    }

    @Override
    public int hashCode() {
        return Objects.hash(author);
    }

}