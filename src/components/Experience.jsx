function ExperienceEntry({company, position, start_date, end_date, location, responsibilities, id, onChange, onDelete, onAdd}) {
    const responsibilitiesList = responsibilities.map((responsibility, i) =>
        <div className="responsibility-container" key={responsibility.id}>
            <input type="text" name="responsibility" id={"responsibility" + i + id} value={responsibility.value} onChange={onChange} data-index={i} data-id={responsibility.id} />
            <svg onClick={onDelete} data-section="responsibilities" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path data-section="responsibilities" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
        </div>
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
                <button onClick={onAdd} data-section="responsibilities">+ Add responsibility</button>
            </div>
            <button className="remove" id={id} onClick={onDelete} data-section="experience">Delete entry</button>
        </div>
    )
}

function Experience(props) {
    return (
        <fieldset className="experience-fieldset">
            <legend>Experience</legend>
            {props.experience.map(entry =>
                <ExperienceEntry key={entry.id} {...entry} onChange={props.onChange} onDelete={props.onDelete} onAdd={props.onAdd} />
            )}
            <button onClick={props.onAdd} data-section="experience">Add entry</button>
        </fieldset>
    );
}

export default Experience;