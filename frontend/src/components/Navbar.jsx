import '../css/Navbar.css'

function Navbar() {
    return (
      <header>
        <img className="nav-image" src='/Scroll_1.png'/>
        <nav>
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
    );
  }  
  
  export default Navbar;
  