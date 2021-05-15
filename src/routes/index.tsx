import { IRouter } from "types/router/interface";
import HomePage from "pages/Home";
import CounterPage from "pages/Counter";
import EmployeesPage from "pages/Employees";

import { renderRoutes } from "./router";

const routes: IRouter[] = [
  {
    path: "/",
    isExact: true,
    Component: HomePage,
  },
  {
    path: "/counter",
    isExact: true,
    Component: CounterPage,
  },
  {
    path: "/employees",
    isExact: true,
    Component: EmployeesPage,
  },
];

const router = renderRoutes(routes);

export default router;
