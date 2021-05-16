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

  getAllMentors() {
    return Api.get("/mentors?isMentor=true");
  }

  //getMentorsByMentorArea() {
  //  return Api.get("/mentors");
  //}

}

export default new ProfileApi();
