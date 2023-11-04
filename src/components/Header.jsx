function Header({isEditing, onClick}) {
    return (
        <header>
            <div className="wrapper">
                <h1>CV Builder</h1>
                <nav>
                    <button onClick={onClick}>{isEditing ? "Visualize" : "Edit"}</button>
                    {!isEditing && <button onClick={() => window.print()}>Print</button>}
                </nav>
            </div>
        </header>
    );
}

export default Header;