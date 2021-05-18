import Api from "./Api";

class FollowerApi {
    addFollower(id) {
        return Api.get("/follower/add/" + id);
    }
    removeFollower(id) {
        return Api.get("/unfollow/remove/" + id);
    }

}

export default new FollowerApi();
