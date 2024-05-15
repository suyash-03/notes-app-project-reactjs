const Navbar = () => {
    return (
        //Example of InLine Styling in ReactJS
        <nav className="navbar">
            <h1> The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: 8
                }}>New Blog</a>
                <a href="/profile">Profile</a>
            </div>
        </nav>
    );
}

export default Navbar;