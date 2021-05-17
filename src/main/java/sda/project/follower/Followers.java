package sda.project.follower;

import sda.project.user.User;
import javax.persistence.*;

@Entity
public class Followers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "from_user_fk")
    private User to;

    @ManyToOne
    @JoinColumn(name = "to_user_fk")
    private User from;

    public Followers(){};

    public Followers(User to, User from) {
        this.to = to;
        this.from = from;
    }

    public User getTo() {
        return to;
    }

    public void setTo(User to) {
        this.to = to;
    }

    public User getFrom() {
        return from;
    }

    public void setFrom(User from) {
        this.from = from;
    }
}
