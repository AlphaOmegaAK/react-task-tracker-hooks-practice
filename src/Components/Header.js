// Prop Types step 1
import PropTypes from 'prop-types' 


const Header = (props) => { // Or Destructured : Header = ({ title }) ...
  return (
    <header>
      <h1>{props.title}</h1>
      
    </header>
  )
}

// // Default Props
// Header.defaultProps = {
//   title: "Task Tracker",
// }

// Prop Types step 2
Header.propTypes = {
  title: PropTypes.string,
}

export default Header
