import Api from "./Api";

class UserApi {
  getUser() {
    return Api.get("/user");
  }
}

export default new UserApi();
