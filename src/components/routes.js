import { CREATE_PROFILE, MAIN, PROFILE, VIEW_PROFILES, CREATE_ACCOUNT } from "../utils/consts";
import CreateProfile from "../pages/CreateProfilePage";
import Main from "../pages/MainPage";
import Profile from "../pages/ProfilePage";
import ViewProfiles from "../pages/ViewProfilePage";
import RegisterForm from "../pages/create-account";

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
  {
    path: CREATE_ACCOUNT,
    Component: RegisterForm
  }
]

export const privateRoutes = []