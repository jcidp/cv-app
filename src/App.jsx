import { useState } from 'react'
import './App.css'
import Form from './components/Form';

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    name: "James",
    email: "dog",
    phone: "55",
  });
  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      responsibilities: [],
    }
  ]);
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      start_date: "",
      end_date: "",
    },
  ]);

  const handleInputChange = e => {
    const field = e.target.id;
    const newInfo = {...generalInfo};
    newInfo[field] = e.target.value;
    setGeneralInfo(newInfo);
  }

  return (
    <>
      {isEditing ? 
        <Form 
          generalInfo={generalInfo}
          experience={experience} 
          education={education}
          handleInputChange={handleInputChange}
        /> :
        <></>}
    </>
  )
}

export default App
