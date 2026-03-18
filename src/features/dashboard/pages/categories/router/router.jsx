import { lazy } from "react";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import PageFallback from "../../../../../components/PageFallBack";
const Categories = lazy(() => import("../pages/Categories"));
const AddCategory = lazy(() => import("../pages/AddCategory"));
const UpdateCategory = lazy(() => import("../pages/UpdateCategory"));

export const categoryRouter = [
  {
    path: dashboardRouts.category.page,
    element: (
      <PageFallback>
        <Categories />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.category.add,
    element: (
      <PageFallback>
        <AddCategory />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.category.update(),
    element: (
      <PageFallback>
        <UpdateCategory />
      </PageFallback>
    ),
  },
];
