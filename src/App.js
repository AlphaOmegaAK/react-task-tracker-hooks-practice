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
  console.log('delete', id);
  // the actual button is in Task component, which is in Tasks Component -> so you want to pass it to TASKS as a prop
  // ! App > Tasks > Task all get onDelete as Props
}

  return (
    <div className="container">
      <Header title="Task Tracker"/> 
      <Tasks tasks={ tasks } onDelete={ deleteTask }/>

    
    </div>
  );
}


export default App;
