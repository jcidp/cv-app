import "../styles/Header.css";

function Header({isEditing, onClick}) {
    return (
        <header>
            <h1>CV Builder</h1>
            <nav>
                <button onClick={onClick}>{isEditing ? "Visualize" : "Edit"}</button>
                {!isEditing && <button>Print</button>}
            </nav>
        </header>
    );
}

export default Header;