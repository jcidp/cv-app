function EducationEntry({school, degree, start_date, end_date, location}) {
    return (<div className="education-entry-view">
        <b>{school}</b>
        <span>{start_date} - {end_date || "present"}</span>
        <i>{degree}</i>
        <span>{location}</span>
    </div>)
}

function EducationView({education}) {
    return (<section>
        <h2>Education</h2>
        {education.map(entry => 
            <EducationEntry key={entry.id} {...entry} />
        )}
    </section>)
}

export default EducationView;