import { homeRoutes } from "../../../constant/pageRoutes";
import { DashboardProvider } from "../../../context/DashboardContext";
import DasboardLayout from "../components/DasboardLayout";
import { authorRouter } from "../pages/authers/router/router";
import { categoryRouter } from "../pages/categories/router/router";
import { tagsRouter } from "../pages/tages/router/router";
import { usersRouter } from "../pages/users/router/router";

export const dashboardRouter = [
  {
    path: homeRoutes.dashboard,
    element: (
      <DashboardProvider>
        <DasboardLayout />
      </DashboardProvider>
    ),
    children: [
      ...usersRouter,
      ...tagsRouter,
      ...categoryRouter,
      ...authorRouter,
    ],
  },
];
