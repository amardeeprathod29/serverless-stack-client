import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
  {/* Finally, catch all unmatched routes */}
<Route>
  <NotFound />
</Route>
    </Switch>
  );
}