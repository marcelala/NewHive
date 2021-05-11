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

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date dateCreated;

    private Date lastEdited;

    @Column(nullable = false)
    @NotEmpty(message = "Please provide a valid post tittle")
    private String title;

    @Column(nullable = false)
    @NotEmpty(message = "Please provide a valid post body")
    private String body;

    @Column(nullable = false)
    @NotEmpty(message = "Please provide a valid post topic")
    private String topic;

    private String authorName;


    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @JsonIdentityReference(alwaysAsId = true)
    private User author;

    @OneToMany(mappedBy = "commentOwner", cascade = CascadeType.ALL)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private List<Comment> comments;

    public Post() {

    }

    public Post(Long id, Date dateCreated, Date lastEdited,
                @NotEmpty(message = "Please provide a valid post tittle") String title,
                @NotEmpty(message = "Please provide a valid post body") String body,
                @NotEmpty(message = "Please provide a valid post topic") String topic, User author, String authorName) {
        this.id = id;
        this.dateCreated = new Date();
        this.lastEdited = this.dateCreated;
        this.title = title;
        this.body = body;
        this.topic = topic;
        this.author = author;
        this.authorName = authorName;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Date getLastEdited() {
        return lastEdited;
    }

    public void setLastEdited(Date lastEdited) {
        this.lastEdited = lastEdited;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

        public List<Comment> getComments() {
        return this.comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
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