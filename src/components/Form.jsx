import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";

function Form({generalInfo, experience, education, handleGeneralInputChange, handleExperienceInputChange}) {
    return (
        <form>
            <GeneralInfo {...generalInfo} onChange={handleGeneralInputChange} />
            <Experience experience={experience} onChange={handleExperienceInputChange} />
        </form>
    );
}

export default Form;