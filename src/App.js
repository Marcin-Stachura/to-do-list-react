import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
  { id: 1, taskName: "task not done", taskDone: false },
  { id: 2, taskName: "task done", taskDone: true },
];

const hideDoneTasks = false;


function App() {
  return (
    <Main>

      <Header
        title="My to-do list"
      />

      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="Task list:"
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Main>

  );
}

export default App;
