import Api from "./Api";

class FollowerApi {
  addFollower(id) {
    return Api.put("/follower/add/" + id);
  }
  removeFollower(id) {
    return Api.delete("/unfollow/remove/" + id);
  }
  isFollowing(id) {
    return Api.get("isFollower/" + id);
  }
}

export default new FollowerApi();
