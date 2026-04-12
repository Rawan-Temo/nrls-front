import { lazy } from "react";
import { homeRoutes } from "../../../../../constant/pageRoutes";
import PageFallback from "./../../../../../components/PageFallBack";
const Statistics = lazy(() => import("../page/Statistics"));

export const statisticRouter = {
  path: homeRoutes.dashboard,
  element: (
    <PageFallback>
      <Statistics />
    </PageFallback>
  ),
};
