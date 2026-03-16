import { lazy } from "react";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import PageFallback from "../../../../../components/PageFallBack";
const AllUsers = lazy(() => import("../pages/AllUsers"));
const AddUser = lazy(() => import("../pages/AddUser"));

export const usersRouter = [
  {
    path: dashboardRouts.user.page,
    element: (
      <PageFallback>
        <AllUsers />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.user.add,
    element: (
      <PageFallback>
        <AddUser />
      </PageFallback>
    ),
  },
];
