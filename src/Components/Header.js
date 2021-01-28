
const Header = ({ title }) => { 
  return (
    <header>
      <h1 style={{color: 'red', backgroundColor: 'black'}}>{ title } In Line Style</h1>
      <h1 style={headingStyle}>{ title } as a Variable</h1>
      <h2>{title}</h2>
      
    </header>
  )
}

const headingStyle = {
  color: 'blue',
  backgroundColor: 'black'
}

export default Header
