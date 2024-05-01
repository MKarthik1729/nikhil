import './App.css';
import {useState} from 'react'
import Login from './components/Login';
import Register from './components/Register';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
function App() {
  const [log,setLog] = useState(false)
  const [toggle,setToggle] = useState(true)
  const [event,setEvent] = useState(true)
  return (
    <div className="App">
     {!log && 
     <div>
      <div className="flex">
        <p 
        onClick={()=>setToggle(true)}
        >Login</p>
        <p
        onClick={()=>setToggle(false)}
        >Register</p>
      </div>
      {toggle && <Login setLog={setLog} />}
        {!toggle && <Register />}
      </div>
     } 
     {log && <div>
      <div className='flex'>
        <p onClick={()=>setEvent(false)}>All Events</p>
        <p onClick={()=>setEvent(true)}>Add new Event</p>
        <p onClick={()=>setLog(false)}>LogOut</p>
        </div>
        {event && <EventForm setEvent={setEvent} />}
        {!event && <EventList />}
     </div> }
    </div>
  );
}

export default App;
