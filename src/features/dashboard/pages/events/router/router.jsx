import { lazy } from "react";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import PageFallback from "../../../../../components/PageFallBack";
const AllEvents = lazy(() => import("../pages/AllEvents"));
const AddEvent = lazy(() => import("../pages/AddEvent"));
const UpdateTag = lazy(() => import("../pages/UpdateTag"));

export const eventsRouter = [
  {
    path: dashboardRouts.events.page,
    element: (
      <PageFallback>
        <AllEvents />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.events.add,
    element: (
      <PageFallback>
        <AddEvent />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.events.update(),
    element: (
      <PageFallback>
        <UpdateTag />
      </PageFallback>
    ),
  },
];
