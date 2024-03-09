import Logo from "../../assets/app-logo.png";

const Header = () => {
  return (
    <header className="app-navbar">
      <div className="logo-container">
        <img src={Logo} alt="app-logo" className="app-logo" />
        <h1>Food Villa</h1>
      </div>
      <div>
        <input
          type="text"
          className="search-field"
          placeholder="Search any item..."
        />
        <button className="search-button">Search</button>
      </div>
      <ul className="nav-options">
        <li>Home</li>
        <li>Contact</li>
        <li>About Us</li>
        <li>Cart(0)</li>
      </ul>
    </header>
  );
};

export default Header;
