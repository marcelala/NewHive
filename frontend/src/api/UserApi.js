import Api from "./Api";

class UserApi {
  getUser(userEmail) {
    return Api.get("/users");
  }

}

export default new UserApi();
