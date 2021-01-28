// Don't want to hardcode -> should be in STATE:dynamic
const tasks = [
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
];



const Tasks = () => {
  return (
    <>
    {/* Create a List using the map() method */}
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}


    </>
  )
}


export default Tasks;