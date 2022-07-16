import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([
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

  //Add new Task and generate random id for tasks using javascript
  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
console.log(id);
  }
  // Delete tasks
  const deleteTasks = (id) =>
    setTasks(tasks.filter((task) => task.id !== id
    ))

  // Toggle tasks
  // in this we are writing condition to remainder by using id we are making the remainder true or false 
  const toggleTasks = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ?
        { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">

      {showAddTask && <AddTask  onAdd={addTask}/>}
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleTasks} />
        : 'No Tasks'
      }

    </div>
  );
}

export default App;
