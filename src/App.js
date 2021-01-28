import Header from './Components/Header';

function App() {
  return (
    <div className="container">
    {/* Default Props + Prop Drilling */}
    {/* <Header title="Hello"/> */}

    {/* Prop Types */}
    {/* Warning - expects string */}
      <Header title={ 1 }/> 

    
    </div>
  );
}

export default App;
