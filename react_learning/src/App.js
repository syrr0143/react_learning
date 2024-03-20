import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Password from './components/Password'
import Menu from './components/Menu'
import Clock from './components/Clock'
import Notification from './components/Notification'
function App() {
  const details = {
    name: "sumit",
    last: "yadav"
  }

  return (
    <>
      <Clock />
      <Notification />
    </>

  );
}

export default App;
