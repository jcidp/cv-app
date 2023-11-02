function ExperienceEntryView({company, position, start_date, end_date, location, responsibilities}) {
    const responsibilityList = responsibilities.map(responsibility => 
        <li key={responsibility.id}>{responsibility.value}</li>
    );
    
    return (<div className="experience-entry-view">
        <b>{company}</b>
        <span>{start_date} - {end_date || "present"}</span>
        <i>{position}</i>
        <span>{location}</span>
        <ul>
            {responsibilityList}
        </ul>
    </div>)
}

function ExperienceView(props) {
    return (<section>
        <h2>Experience</h2>
        {props.experience.map(entry => 
            <ExperienceEntryView key={entry.id} {...entry} />
        )}
    </section>);
}

export default ExperienceView;