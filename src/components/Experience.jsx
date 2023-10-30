import "../styles/Experience.css";

function ExperienceEntry({company, position, start_date, end_date, responsibilities, id, onChange}) {
    return (
        <div className="experience-entry">
            <label htmlFor={"company" + id}>Company:</label>
            <input type="text" name="company" id={"company" + id} value={company} onChange={onChange} />
            <label htmlFor={"position" + id}>Position:</label>
            <input type="text" name="position" id={"position" + id} value={position} onChange={onChange} />
            <label htmlFor={"start_date" + id}>Start Date:</label>
            <input type="date" name="start_date" id={"start_date" + id} value={start_date} onChange={onChange} />
            <label htmlFor={"end_date" + id}>End Date:</label>
            <input type="date" name="end_date" id={"end_date" + id} value={end_date} onChange={onChange} />
        </div>
    )
}

function Experience(props) {
    return (
        <fieldset>
            <legend>Experience</legend>
            {props.experience.map(entry => {
                return <ExperienceEntry key={entry.id} {...entry} onChange={props.onChange} />
            })}
        </fieldset>
    );
}

export default Experience;