package sda.project.follower;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sda.project.user.User;

@Repository
public interface FollowerRepository extends JpaRepository<Followers,Long> {

    Followers findByToAndFrom(User to,User from);
}
