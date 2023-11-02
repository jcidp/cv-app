import GeneralInfoView from "./GeneralInfoView";
import ExperienceView from "./ExperienceView";
import EducationView from "./EducationView";

function View({generalInfo, experience, education}) {
    return (<>
        <GeneralInfoView {...generalInfo} />
        <ExperienceView experience={experience} />
        <EducationView education={education} />
    </>);
}

export default View;