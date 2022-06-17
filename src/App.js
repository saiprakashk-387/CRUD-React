import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const AddUser = lazy(() => import("./features/users/AddUser"));
const EditUser = lazy(() => import("./features/users/EditUser"));
const UserList = lazy(() => import("./features/users/UserList"));

export default function App() {
  const color = { color: "yellowgreen" };
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <Suspense
              fallback={
                <span>
                  <h1 style={color}>Loading ....</h1>
                </span>
              }
            >
              <AddUser />
            </Suspense>
          </Route>
          <Route path="/edit-user">
            <Suspense
              fallback={
                <span>
                  <h1 style={color}>Loading ....</h1>
                </span>
              }
            >
              <EditUser />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense
              fallback={
                <span>
                  <h1 style={color}> Loading ....</h1>
                </span>
              }
            >
              <UserList />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
