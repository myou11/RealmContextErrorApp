import React from "react";
import App from "./App";
import TaskContext from "./models/Task";

const AppWrapper = () => {
  const {RealmProvider} = TaskContext;

  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}

export default AppWrapper;
