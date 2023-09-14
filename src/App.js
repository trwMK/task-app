import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn Coding",
      day: "Every day",
      reminder: true,
    },
    {
      id: 2,
      text: "Read a lot",
      day: "Every day",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Sep 15th at 2:30pm",
      reminder: false,
    },
  ]);

  function handleAddTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  function handleDelete(id) {
    setTasks(tasks.filter((curTask) => curTask.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAddTask={handleAddTask} />

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          onDelete={handleDelete}
          onToggle={toggleReminder}
        />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
