import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => { // Or Destructured : Header = ({ title }) ...

  const onClick = () => {
    console.log("Click 1");
  }

  return (
    <header className="header">
      
      <h1 style={headingStyle}>
        {title}
      </h1>

      <Button color="green" text="Add" onClick={ onClick }/>
      
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}


const headingStyle = {
  color: "blue",
  backgroundColor: "black"
};

export default Header
