import Api from "./Api";

class ProfileApi {
  createProfile(profile) {
    return Api.post("/create-profile", profile);
  }

  viewProfile() {
    return Api.get("/view-profile");
  }

  editProfile(id, profile) {
    return Api.put(`/edit-profile/${id}`, profile);
  }

  //   viewProfileById(id){
  //     return Api.get(`/view-profile/${id}`);
  // }

  viewProfileByOwner(owner) {
    return Api.get(`/profile/${owner}`);
  }

  viewProfileByEmail(email) {
    return Api.get(`/view-profile-by-email/${email}`);
  }
  getAllProfiles() {
    return Api.get("/view-profile/all");
  }

  getAllMentors() {
    return Api.get("/mentors?isMentor=true");
  }

  //getMentorsByMentorArea() {
  //  return Api.get("/mentors");
  //}
}
export default new ProfileApi();
