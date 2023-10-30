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
      company: "Consulting Co.",
      position: "Consultant",
      start_date: "2022-10-01",
      end_date: "",
      responsibilities: [],
      id: crypto.randomUUID(),
    },
    {
      company: "Consulting Co.",
      position: "Analyst",
      start_date: "2020-10-01",
      end_date: "2022-09-30",
      responsibilities: [],
      id: crypto.randomUUID(),
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

  const handleGeneralInputChange = e => {
    const field = e.target.id;
    const newInfo = {...generalInfo};
    newInfo[field] = e.target.value;
    setGeneralInfo(newInfo);
  };

  const handleExperienceInputChange = e => {
    const field = e.target.name;
    const targetId = e.target.id.slice(field.length);
    setExperience(experience.map(entry => {
      if (targetId !== entry.id) return entry;
      const newEntry = {...entry};
      newEntry[field] = e.target.value;
      return newEntry;
    }));
  }

  return (
    <>
      {isEditing ? 
        <Form 
          generalInfo={generalInfo}
          experience={experience} 
          education={education}
          handleGeneralInputChange={handleGeneralInputChange}
          handleExperienceInputChange={handleExperienceInputChange}
        /> :
        <></>}
    </>
  )
}

export default App
