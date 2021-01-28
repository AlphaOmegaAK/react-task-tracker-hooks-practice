import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Doctors Appointment",
      day: "Jan 19 at 1:30pm",
      reminder: true,
    },
    {
      id: 1,
      text: "Take Child to School",
      day: "Jan 20 at 8:30am",
      reminder: true,
    },
    {
      id: 2,
      text: "Buy Milk",
      day: "Jan 21 at 4:00pm",
      reminder: false,
    }
  ]); // GLOBAL State

// Delete Task
  const deleteTask = (id) => {
    // working with immutable state
    // don't show task if the id that was click UI removal
    setTasks(tasks.filter((task) => task.id !== id))

    // console.log('delete', id);
    // // the actual button is in Task component, which is in Tasks Component -> so you want to pass it to TASKS as a prop
    // // ! App > Tasks > Task all get onDelete as Props
  }

  
    const toggleReminder = (id) => {
      console.log(id);
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

      /* tasks in our state map through for each (task). where the task.id is the passed in id ? then spread across(...task) all task properties but change the reminder (,reminder) to opposite of what it is,: else do nothing

      */
  }
    

  return (
    <div className="container">
      <Header title="Task Tracker"/> 
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ("No Tasks To Show")}

    
    </div>
  );
}


export default App;
