import { atom, selector } from "recoil";
import UserApi from "../api/UserApi"

export const profilesState = atom({
  key: "profilesState",
  default: [],
});

export const allProfiles = selector({
  key: 'allProfiles',
  get: async ({get}) => {
    const response = await ProfileApi.getAllProfiles({
      usersState: get(profilesState),
    });
    return response.data;
  },
});