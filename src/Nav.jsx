const Navbar = () => {
  return (

    <div className="navbar">
      <div className="nav-right">
        <a href={'/'} className="menu">Owner</a>
      </div>
      <div className="nav-left">
        <a href={'/page-2'} className="menu">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
