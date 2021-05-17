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
  
  viewProfileById(id){
    return Api.get(`/view-profile/${id}`);
}

viewProfileByUserName(author){
  return Api.get(`/view-profile/${author}`);
}
getAllProfiles() {
  return Api.get('/view-profile/all');
}
}

export default new ProfileApi();
