package sda.project.follower;

import sda.project.user.User;
import javax.persistence.*;

/** This is a model class which represent
 * Follower Entity and it contains necessary
 * fields to create follower Entity.
 * @since : 2021-05-14
 */
@Entity
public class Followers {

    /**
     * Represents the id of follower.
     * It is the primary key of follower Entity
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Represents the follower user.
     */
    @ManyToOne
    @JoinColumn(name = "from_user_fk")
    private User from;

    /**
     * Represents the following user.
     */
    @ManyToOne
    @JoinColumn(name = "to_user_fk")
    private User to;

    /**
     * Hibernate needs a default constructor to function
     */
    public Followers(){};

    public Followers(User to, User from) {
        this.to = to;
        this.from = from;
    }

    /**
     * A method to get followers of User
     */
    public User getTo() {
        return to;
    }

    /**
     * A method to set followers of User
     */
    public void setTo(User to) {
        this.to = to;
    }

    /**
     * A method to get following of User
     */
    public User getFrom() {
        return from;
    }

    /**
     * A method to set following of User
     */
    public void setFrom(User from) {
        this.from = from;
    }

}
