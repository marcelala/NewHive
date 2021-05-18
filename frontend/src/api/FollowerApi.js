import Api from "./Api";

class FollowerApi {
    addFollower(id) {
        return Api.get("/follower/add/" + id);
    }
    removeFollower(id) {
        return Api.get("/unfollow/remove/" + id);
    }
    isFollowing(id) {
        return Api.get("follower?id=" + id);
    }
}

export default new FollowerApi();
