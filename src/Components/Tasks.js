import { useState } from 'react';

// ----- Hard Coded pre-use of state ---------
// Don't want to hardcode -> should be in STATE:dynamic
// const tasks = [
//   {
//     id: 1,
//     text: "Doctors Appointment",
//     day: "Jan 20 at 1:30pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Take Child to School",
//     day: "Jan 21 at 8:30am",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Buy Milk",
//     day: "Jan 22 at 4:00pm",
//     reminder: false,
//   }
// ];
// --------------------------------------------


const Tasks = () => {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Jan 20 at 1:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Take Child to School",
    day: "Jan 21 at 8:30am",
    reminder: true,
  },
  {
    id: 3,
    text: "Buy Milk",
    day: "Jan 22 at 4:00pm",
    reminder: false,
  }
])
  return (
    <>
    {/* Create a List using the map() method */}
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}


    </>
  )
}


export default Tasks;

// State is immutable, it gets re-created and sent back down to component ( it's one way direction data )
// To update the state you would set the state : setTasks([...tasks], {new object aka task}) (in this case)
// i.e : can't push()/pop() to/from state

// Prop Drilling : to have global state place it at highest level component - App.js
// or use Context, Redux to have a 'cloud' that you can pull state from also globally