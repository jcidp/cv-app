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
      responsibilities: [{id: crypto.randomUUID(), value: "Responsibility1"}],
      id: crypto.randomUUID(),
    },
    {
      company: "Consulting Co.",
      position: "Analyst",
      start_date: "2020-10-01",
      end_date: "2022-09-30",
      responsibilities: [{id: crypto.randomUUID(), value: "Responsibility2"}],
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
    const sliceIndex = field.length + (field === "responsibility" ? e.target.dataset.index.length : 0);
    const targetId = e.target.id.slice(sliceIndex);
    setExperience(experience.map(entry => {
      if (targetId !== entry.id) return entry;
      const newEntry = {...entry};
      if (field !== "responsibility") newEntry[field] = e.target.value;
      else newEntry["responsibilities"] = getNewResponsibilities(entry.responsibilities, e.target.dataset.id, e.target.value);
      return newEntry;
    }));
  }

  const getNewResponsibilities = (responsibilities, targetId, newValue) => {
    return responsibilities.map(responsibility => {
      if (targetId !== responsibility.id) return responsibility;
      return {...responsibility, value: newValue};
    });
  };

  const handleEducationInputChange = e => {
    const field = e.target.name;
    const targetId = e.target.id.slice(field.length);
    setEducation(education.map(entry => {
      if (targetId !== entry.id) return entry;
      const newEntry = {...entry};
      newEntry[field] = e.target.value;
      return newEntry;
    }));
  ;}

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
