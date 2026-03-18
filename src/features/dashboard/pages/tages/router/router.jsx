import { lazy } from "react";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import PageFallback from "../../../../../components/PageFallBack";
const AllTags = lazy(() => import("../pages/AllTags"));
const AddTag = lazy(() => import("../pages/AddTag"));
const UpdateTag = lazy(() => import("../pages/UpdateTag"));

export const tagsRouter = [
  {
    path: dashboardRouts.tag.page,
    element: (
      <PageFallback>
        <AllTags />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.tag.add,
    element: (
      <PageFallback>
        <AddTag />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.tag.update(),
    element: (
      <PageFallback>
        <UpdateTag />
      </PageFallback>
    ),
  },
];
