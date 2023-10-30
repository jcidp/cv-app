import "../styles/GeneralInfo.css"

function GeneralInfo({name, email, phone, onChange}) {
    return (
        <fieldset className="personal-info">
            <legend>Personal Info</legend>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={onChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={onChange} />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" id="phone" value={phone} onChange={onChange} />
        </fieldset>
    );
}

export default GeneralInfo;