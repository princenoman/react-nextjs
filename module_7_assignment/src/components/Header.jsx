function Header({ appName }) {
  return (
    <div>
      <nav className="navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid">
          <a className="" href="#">
            <h1 className="text-white text-center text-uppercase">{appName}</h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
