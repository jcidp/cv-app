import GeneralInfo from "./GeneralInfo"

function Form({generalInfo, experience, education, handleInputChange}) {
    return (
        <form>
            <GeneralInfo {...generalInfo} onChange={handleInputChange} />
        </form>
    );
}

export default Form;