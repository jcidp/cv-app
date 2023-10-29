import { useState } from 'react'
import './App.css'

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      start_date: "",
      end_date: "",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      responsibilities: [],
    }
  ])

  return (
    <>
      <h1>Hello, World!</h1>
    </>
  )
}

export default App
