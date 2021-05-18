import Api from "./Api";

class UserApi {
  getUser() {
    return Api.get("/user");
  }

  getUserByName(name) {
    return Api.get(`/search/${name}`);
}
getUserById(id) {
  return Api.get(`/user/${id}`);
}

}

export default new UserApi();
