function ExperienceEntryView({company, position, start_date, end_date, location, responsibilities}) {
    const responsibilityList = responsibilities.map(responsibility => 
        <li key={responsibility.id}>{responsibility.value}</li>
    );
    
    return (<div className="experience">
        <b>{company}</b>
        <span className="text-right">{start_date} - {end_date || "present"}</span>
        <i>{position}</i>
        <span className="text-right">{location}</span>
        <ul className="responsibility">
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