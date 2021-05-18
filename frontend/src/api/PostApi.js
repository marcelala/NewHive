import Api from "./Api";

class PostApi {
  getAllPosts() {
    return Api.get("/posts");
  }

  getPostsOfConnections() {
    return Api.get("/postOfConnections");
  }
  getPostById(id) {
    return Api.get("/posts/" + id);
  }

  createPost(post) {
    return Api.post("/posts", post);
  }

  updatePost(postId, post) {
    return Api.put("/posts/" + postId, post);
  }

  deletePost(id) {
    return Api.delete("/posts/" + id);
  }
  getPostsByName(authorname) {
    return Api.get(`/posts/${authorname}`);
  }
  getPostsByEmail(author) {
    return Api.get(`/posts?author=${author}`);
  }

  getProfileByOwner(owner) {
    return Api.get("/profile/" + owner);
  }
}

export default new PostApi();
