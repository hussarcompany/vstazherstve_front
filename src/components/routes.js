import { CREATE_PROFILE, MAIN, PROFILE, VIEW_PROFILES } from "../utils/consts";
import CreateProfile from "./CreateProfile";
import Main from "./Main";
import Profile from "./Profile";
import ViewProfiles from "./ViewProfiles";

export const publicRoutes = [
  {
    path: CREATE_PROFILE,
    Component: CreateProfile
  },
  {
    path: PROFILE,
    Component: Profile
  },
  {
    path: VIEW_PROFILES,
    Component: ViewProfiles
  },
  {
    path: MAIN,
    Component: Main
  },
]

export const privateRoutes = []