import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  const [tasks,setTasks]= useState( [
    {
        id: 1,
        text: 'Doctors Appointment1',
        day: 'Feb 5th at 2:30pm ',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctors Appointment2',
        day: 'Feb 5th at 3:30pm ',
        reminder: true,
    },
    {
        id: 3,
        text: 'Doctors Appointment3',
        day: 'Feb 5th at 7:30pm ',
        reminder: false,
    },
])
// Delete tasks
const deleteTasks = (id) =>
  setTasks(tasks.filter((task)=>task.id !== id
))
 
// Toggle tasks
const toggleTasks =(id)=>{
 setTasks(tasks.map((task)=>
 task.id === id ? 
 {...task, reminder: !task.reminder}  : task))
}

  return (
    <div className="container">
      <Header/>
      
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleTasks}/>
     : 'No Tasks'
    }
       
    </div>
  );
}

export default App;
