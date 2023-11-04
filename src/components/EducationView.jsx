function EducationEntry({school, degree, start_date, end_date, location}) {
    return (<div className="education">
        <p className="bold">{school}</p>
        <p className="text-right">{start_date} - {end_date || "present"}</p>
        <p className="italics">{degree}</p>
        <p className="text-right">{location}</p>
    </div>)
}

function EducationView({education}) {
    return (<section>
        <h2 className="section-heading">Education</h2>
        {education.map(entry => 
            <EducationEntry key={entry.id} {...entry} />
        )}
    </section>)
}

export default EducationView;