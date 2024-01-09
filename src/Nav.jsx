const Navbar = () => {
  return (

    <div className="navbar">
      <div className="nav-left">
        <a href={'/page-2'} className="menu">Owner</a>
      </div>
      <div className="nav-right">
        <a href={'/'} className="menu">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
