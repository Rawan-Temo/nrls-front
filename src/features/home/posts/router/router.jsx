import { lazy } from "react";
import { homeRoutes } from "../../../../constant/pageRoutes";
import PageFallback from "./../../../../components/PageFallBack";
const AllPosts = lazy(() => import("../pages/AllPosts"));
const ViewPost = lazy(() => import("../pages/ViewPost"));
const PostSurvey = lazy(() => import("../pages/PostSurvey"));
const ViewEvents = lazy(() => import("../pages/ViewEvents"));

export const postsRouter = [
  {
    path: homeRoutes.posts.page(),
    element: (
      <PageFallback>
        <AllPosts />
      </PageFallback>
    ),
  },
  {
    path: homeRoutes.posts.view(),
    element: (
      <PageFallback>
        <ViewPost />
      </PageFallback>
    ),
  },
  {
    path: homeRoutes.posts.viewSurvey(),
    element: (
      <PageFallback>
        <PostSurvey />
      </PageFallback>
    ),
  },
  {
    path: homeRoutes.posts.events(),
    element: (
      <PageFallback>
        <ViewEvents />
      </PageFallback>
    ),
  },
];
