function GeneralInfoView({name, email, phone}) {
    return (<section>
        <h2>{name}</h2>
        <a>{email}</a>
        <span>{phone}</span>
    </section>)
}

export default GeneralInfoView;