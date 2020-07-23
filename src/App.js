import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import HeaderButtons from "./HeaderButtons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
  { id: 1, taskName: "task not done", taskDone: false },
  { id: 2, taskName: "task done", taskDone: true },
];



function App() {

  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

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
        title="Task list"
        extraHeaderContent={
          <HeaderButtons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDoneTasks={toggleHideDoneTasks}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
          />}
      />
    </Main>

  );
}

export default App;
