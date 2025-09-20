
import { useEffect } from 'react';
import './App.css'
const API_URL = "http://localhost:3001/api/tasks/"
const POST_URL = "http://localhost:3001/api/tasks"
const PUT_URL = "http://localhost:3001/api/tasks/"

function App() {

  const fetchTasks = ()=>{
    fetch(API_URL)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }

  const postTask = () => {
    fetch(POST_URL,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: 'Tarea agregada desde el front', completed: false })

    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error creating task:', error));

  }

  const updateTask = (id) => { 
    fetch(`${PUT_URL}${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: 'Tarea actualizada desde el front', completed: true })

    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error updating task:', error));

  }

  const deleteTask = (id) => {
    fetch(`${API_URL}${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error deleting task:', error));
  }


  useEffect(()=>{

    fetchTasks()
  },[])

  return (
    <>
     <h1>Holiwis</h1>
     <button onClick={postTask}>Post Task</button>
     <button onClick={() => updateTask(2)}>Actualizar la tarea 2</button>
     <button onClick={() => deleteTask(3)}>Eliminar la tarea 3</button>
    </>
  )
}

export default App