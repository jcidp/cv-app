function EducationEntry({school, degree, start_date, end_date, location}) {
    return (<div className="education">
        <b>{school}</b>
        <span className="text-right">{start_date} - {end_date || "present"}</span>
        <i>{degree}</i>
        <span className="text-right">{location}</span>
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