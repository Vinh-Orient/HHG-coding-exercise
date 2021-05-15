import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IRouter } from "types/router/interface";

function renderRoute({ Component, path, isExact }: IRouter, parentProps?: any) {
  return (
    <Route
      exact={isExact}
      key={path}
      path={path}
      render={(props) => <Component {...props} {...parentProps} />}
    />
  );
}

function renderRoutes(routes: IRouter[], props?: any) {
  return (
    <BrowserRouter>
      <Switch>
        <>{routes.map((route) => renderRoute(route, props))}</>
      </Switch>
    </BrowserRouter>
  );
}

export { renderRoutes };
