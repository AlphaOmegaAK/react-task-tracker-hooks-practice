import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {

  return (
    <>
    {/* Create a List using the map() method */}
      {tasks.map((task) =>
        (<Task key={task.id} task={task} onDelete={ onDelete }/>))}


    </>
  )
}


export default Tasks;

// State is immutable, it gets re-created and sent back down to component ( it's one way direction data )
// To update the state you would set the state : setTasks([...tasks], {new object aka task}) (in this case)
// i.e : can't push()/pop() to/from state

// Prop Drilling : to have global state place it at highest level component - App.js
// or use Context, Redux to have a 'cloud' that you can pull state from also globally