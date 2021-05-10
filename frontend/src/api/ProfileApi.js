import Api from "./Api";

class ProfileApi {
  createProfile(profile) {
    return Api.post("/create-profile" , profile);
  }

  viewProfile() {
    return Api.get("/view-profile");
  }

  editProfile(profile) {
    return Api.put("/edit-profile", profile)
  }

}

export default new ProfileApi();
