import { icons } from "./icons";

const homeRoutes = {
  about: "/about",
  contact: "/contact_us",
  login: "/login",
  dashboard: "/dashboard",
  author: {
    view: (id = ":id") => `/author/${id}`,
  },
  posts: {
    page: (name = ":name") => `/${name}`,
    view: (name = ":name", id = ":id") => `/${name}/${id}`,
    viewSurvey: (name = ":name", id = ":id") => `/${name}/${id}/survey`,
    events: (name = ":name", id = ":id") => `/${name}/${id}/events`,
  },
};

const dashboardRouts = {
  user: {
    page: `${homeRoutes.dashboard}/users`,
    add: `${homeRoutes.dashboard}/users/add`,
    update: (id = ":id") => `${homeRoutes.dashboard}/users/${id}`,
  },
  author: {
    page: `${homeRoutes.dashboard}/authors`,
    add: `${homeRoutes.dashboard}/authors/add`,
    view: (id = ":id") => `${homeRoutes.dashboard}/authors/${id}`,
    update: (id = ":id") => `${homeRoutes.dashboard}/authors/${id}/update`,
  },
  tag: {
    page: `${homeRoutes.dashboard}/tags`,
    add: `${homeRoutes.dashboard}/tags/add`,
    update: (id = ":id") => `${homeRoutes.dashboard}/tags/${id}`,
  },
  backup: {
    page: `${homeRoutes.dashboard}/backup`,
  },
  category: {
    page: `${homeRoutes.dashboard}/categories`,
    add: `${homeRoutes.dashboard}/categories/add`,
    update: (id = ":id") => `${homeRoutes.dashboard}/categories/${id}`,
  },
  events: {
    page: `${homeRoutes.dashboard}/events`,
    add: `${homeRoutes.dashboard}/events/add`,
    update: (id = ":id") => `${homeRoutes.dashboard}/events/${id}`,
  },
  post: {
    page: `${homeRoutes.dashboard}/posts`,
    add: `${homeRoutes.dashboard}/posts/add`,
    view: (id = ":id") => `${homeRoutes.dashboard}/posts/${id}`,
    update: (id = ":id") => `${homeRoutes.dashboard}/posts/${id}/update`,
    viewSurvey: (id = ":id") => `${homeRoutes.dashboard}/posts/${id}/survey`,
    events: (id = ":id") => `${homeRoutes.dashboard}/posts/${id}/events`,
    addSurvey: (post = ":post") =>
      `${homeRoutes.dashboard}/posts/${post}/survey/add`,
    updateSurvey: (post = ":post", id = ":id") =>
      `${homeRoutes.dashboard}/posts/${post}/survey/${id}`,
  },
};

const dashboardPages = [
  {
    title: "dashboard",
    to: homeRoutes.dashboard,
    icon: icons.dashboard,
  },
  {
    title: "users",
    to: dashboardRouts.user.page,
    icon: icons.users,
  },
  {
    title: "add user",
    to: dashboardRouts.user.add,
    icon: icons.addUser,
  },
  {
    title: "posts",
    to: dashboardRouts.post.page,
    icon: icons.posts,
  },
  {
    title: "events",
    to: dashboardRouts.events.page,
    icon: icons.events,
  },
  {
    title: "add post",
    to: dashboardRouts.post.add,
    icon: icons.add,
  },
  {
    title: "tags",
    to: dashboardRouts.tag.page,
    icon: icons.tags,
  },
  {
    title: "categories",
    to: dashboardRouts.category.page,
    icon: icons.category,
  },
  {
    title: "authors",
    to: dashboardRouts.author.page,
    icon: icons.author,
  },
  {
    title: "backup",
    to: dashboardRouts.backup.page,
    icon: icons.backup,
  },
];

export { homeRoutes, dashboardPages, dashboardRouts };
