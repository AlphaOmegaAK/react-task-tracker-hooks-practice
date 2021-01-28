import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id) } /> </h3>
      <p>{ task.day }</p>
    </div>


  )
}
// In terms of events they are in Top most component (App) so functions can be prop drilled down to here needed, or again via redux


// State gets passed down
// Actions get passed up

export default Task;