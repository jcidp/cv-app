import "../styles/Education.css"

function EducationEntry({school, degree, start_date, end_date, location, id, onChange}) {
    return (
        <div className="education-entry">
            <label htmlFor={"school" + id}>School:</label>
            <input type="text" name="school" id={"school" + id} value={school} onChange={onChange} />
            <label htmlFor={"degree" + id}>Degree:</label>
            <input type="text" name="degree" id={"degree" + id} value={degree} onChange={onChange} />
            <label htmlFor={"start_date" + id}>Start Date:</label>
            <input type="date" name="start_date" id={"start_date" + id} value={start_date} onChange={onChange} />
            <label htmlFor={"end_date" + id}>End Date:</label>
            <input type="date" name="end_date" id={"end_date" + id} value={end_date} onChange={onChange} />
            <label htmlFor={"location" + id}>City:</label>
            <input type="text" name="location" id={"location" + id} value={location} onChange={onChange} />
        </div>
    )
}

function Education(props) {
    return (
        <fieldset>
            <legend>Education</legend>
            {props.education.map(entry =>
                <EducationEntry key={entry.id} {...entry} onChange={props.onChange} />
            )}
        </fieldset>
    )
}

export default Education;