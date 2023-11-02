function ExperienceEntry({company, position, start_date, end_date, location, responsibilities, id, onChange}) {
    const responsibilitiesList = responsibilities.map((responsibility, i) =>
        <input type="text" name="responsibility" key={responsibility.id} id={"responsibility" + i + id} value={responsibility.value} onChange={onChange} data-index={i} data-id={responsibility.id} />
    );

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
            <label htmlFor={"location" + id}>City:</label>
            <input type="text" name="location" id={"location" + id} value={location} onChange={onChange} />
            <div className="responsibilities">
                <p>Responsibilities:</p>
                {responsibilitiesList}
            </div>
        </div>
    )
}

function Experience(props) {
    return (
        <fieldset>
            <legend>Experience</legend>
            {props.experience.map(entry =>
                <ExperienceEntry key={entry.id} {...entry} onChange={props.onChange} />
            )}
        </fieldset>
    );
}

export default Experience;