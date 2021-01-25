import { Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/gradient/linear">Linear</Route>
        <Route path="/gradient/polynomial">Polynomial</Route>
      </Switch>
    </div>
  );
};
