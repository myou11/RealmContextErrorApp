import React from "react";
import App from "./App";
import TaskContext from "./models/Task";
const { RealmProvider } = TaskContext;

const AppWrapper = () => {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}

export default AppWrapper;
