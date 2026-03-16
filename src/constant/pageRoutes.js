import { icons } from "./icons";

const homeRoutes = {
  about: "/about",
  contact: "/contact_us",
  login: "/login",
  dashboard: "/dashboard",
};

const dashboardRouts = {
  user: {
    page: `${homeRoutes.dashboard}/users`,
    add: `${homeRoutes.dashboard}/users/add`,
  },
};

const dashboardPages = [
  {
    title: "users",
    to: dashboardRouts.user.page,
    icon: icons.users,
  },
];

export { homeRoutes, dashboardPages, dashboardRouts };
