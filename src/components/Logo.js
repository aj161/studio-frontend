import logo from '../img/logo.png';

function Logo() {
  return (
    <div className="App">
      <img
              src={logo}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              height="100px"
              className="d-inline-block align-top"
              alt="Logo"
            />
    </div>
  );
}

export default Logo;