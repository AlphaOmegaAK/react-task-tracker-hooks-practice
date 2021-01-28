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

  return (
    <div className="container">
      <Header title="Task Tracker"/> 
      <Tasks tasks={tasks}/>

    
    </div>
  );
}

export default App;
