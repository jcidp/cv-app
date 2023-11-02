import GeneralInfoView from "./GeneralInfoView";
import ExperienceView from "./ExperienceView";

function View({generalInfo, experience, education}) {
    return (<>
        <GeneralInfoView {...generalInfo} />
        <ExperienceView experience={experience} />
    </>);
}

export default View;