import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  const details = {
    name: "sumit",
    last: "yadav"
  }
  return (
    <>
      <Navbar details={details} />
      <div className='root'>

        <Card />
      </div></>

  );
}

export default App;
