import React, { useState } from 'react';
// import { AppContextProvider } from './context/AppContext';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import MainNav from './components/mainNav.css';
import Dashboard from './pages/Dashboard';
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

import { CSSTransition } from 'react-transition-group';

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
        <Route path='/dashboard' component={Dashboard} />
        {/* <Route path="/artist" component={ArtistCollab} /> */}
      </Switch>
    </BrowserRouter>
    // </AppContextProvider>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');

  function DropdownItem(props) {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className='dropdown'>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
      >
        <div className='menu'>
          <DropdownItem leftIcon={<MyProfileIcon />} goToMenu='main'>
            <Link to='/login'>Login</Link>
          </DropdownItem>
          <DropdownItem leftIcon={<LogoutIcon />}>Logout</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />} goToMenu='settings'>
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
      >
        <div className='menu'>
          <DropdownItem leftIcon={<SettingsIcon />} goToMenu='main' />
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
        </div>
      </CSSTransition>
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
