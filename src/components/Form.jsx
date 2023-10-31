import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";

function Form({generalInfo, experience, education, handleGeneralInputChange, handleExperienceInputChange, handleEducationInputChange}) {
    return (
        <form>
            <GeneralInfo {...generalInfo} onChange={handleGeneralInputChange} />
            <Experience experience={experience} onChange={handleExperienceInputChange} />
            <Education education={education} onChange={handleEducationInputChange} />
        </form>
    );
}

export default Form;