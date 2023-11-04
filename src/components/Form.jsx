import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";

function Form({generalInfo, experience, education, handleGeneralInputChange, handleExperienceInputChange, handleEducationInputChange, handleRemoveElement, handleAddElement}) {
    return (
        <form>
            <GeneralInfo {...generalInfo} onChange={handleGeneralInputChange} />
            <Experience experience={experience} onChange={handleExperienceInputChange} onDelete={handleRemoveElement} onAdd={handleAddElement} />
            <Education education={education} onChange={handleEducationInputChange} onDelete={handleRemoveElement} onAdd={handleAddElement} />
        </form>
    );
}

export default Form;