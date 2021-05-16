import { atom, selector } from "recoil";
import PostApi from "../api/PostApi"

export const postsState = atom({
  key: "postsState",
  default: [],
});

export const allPosts = selector({
  key: 'allPosts',
  get: async ({get}) => {
    const response = await PostApi.getAllPosts({
      postsState: get(postsState),
    });
    return response.data;
  },
});