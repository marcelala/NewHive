import Api from "./Api";

class ProfileApi {
  createProfile(profile) {
    return Api.post("/create-profile" , profile);
  }

  viewProfile() {
    return Api.get("/view-profile");
  }

  editProfile(id, profile) {
    return Api.put(`/edit-profile/${id}`, profile);
  }

}

export default new ProfileApi();
