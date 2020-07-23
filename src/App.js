import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import HeaderButtons from "./HeaderButtons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

function App() {

  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "task not done", taskDone: false },
    { id: 2, taskName: "task done", taskDone: true },
  ]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  const setAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => (
      {
        ...task,
        taskDone: true,
      })));
  };

  const toggleDoneTask = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          taskDone: !task.taskDone,
        };
      return task;
    }));
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(
      task => task.id !== id,
    ));
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
            setAllTasksDone={setAllTasksDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleDoneTask={toggleDoneTask}
            removeTask={removeTask}
          />}
      />
    </Main>

  );
}

export default App;
