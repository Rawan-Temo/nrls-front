import { homeRoutes } from "../../../constant/pageRoutes";
import { DashboardProvider } from "../../../context/DashboardContext";
import DasboardLayout from "../components/DasboardLayout";
import { usersRouter } from "../pages/users/router/router";

export const dashboardRouter = [
  {
    path: homeRoutes.dashboard,
    element: (
      <DashboardProvider>
        <DasboardLayout />
      </DashboardProvider>
    ),
    children: [...usersRouter],
  },
];
