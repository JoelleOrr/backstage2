import React, { useState } from 'react';
// import { AppContextProvider } from './context/AppContext';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import MainNav from './components/Navbar';
// import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import ArtistCollab from './pages/collaboration/ArtistCollab';
import './pages/Home.css';
import { ReactComponent as ProfileIcon } from './icons/dj.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger-icon.svg';
import { ReactComponent as SettingsIcon } from './icons/settings.svg';
import { ReactComponent as LogoutIcon } from './icons/logout.svg';
import { ReactComponent as MyProfileIcon } from './icons/profile-icon.svg';
import { Link } from 'react-router-dom';

function App() {
  return (
    // <AppContextProvider>
    <BrowserRouter>
      <Navbar>
        <Link to='/' className='mainNav-logo'>
          BACKSTAGE
        </Link>
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<ProfileIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />

        <Route exact path='/login' component={Login} />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/artist" component={ArtistCollab} /> */}
      </Switch>
    </BrowserRouter>
    // {/* </AppContextProvider> */}
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className='dropdown'>
      <DropdownItem leftIcon={<MyProfileIcon />}>Loggin</DropdownItem>
      <DropdownItem leftIcon={<LogoutIcon />}>Logout</DropdownItem>
      <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> {props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;
