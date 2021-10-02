import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  //let msg = "Ola mundo!.."
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudando React',
      completed: false
    },
    {
      id: '2',
      title: 'ler livro',
      completed: true
    }

  ]);

  return (
    <>
      <div className="container">
        <AddTask />
      <Tasks tasks={tasks} />
      </div>
      
    </>
  );
};

export default App;
