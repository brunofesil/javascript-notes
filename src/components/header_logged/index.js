import React, { useState } from 'react';
import { Navbar, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UsersService from '../../services/users';
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user'));

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  }

  if (redirectToHome == true)
    return <Redirect to={{ pathname: "/" }} />

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand id="brand1">
        <Column.Group>
          <Column size="11" offset="1">
            <Link to="/notes">
              <img src={logoImage} />
            </Link>
          </Column>
        </Column.Group>
        {/* Sem o nav.burger os elementos do menu nao aparecem, so aparece no desktop por default. */}
        <Navbar.Burger
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
          <Navbar.Item as="div">
            <Dropdown hoverable>
              <Dropdown.Trigger>
                <Button className="button" color="white" outlined>
                  <span>{JSON.parse(user)['name']} ▼</span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  <Dropdown.Item as="div">
                    <Link to="/users/edit">User Edit</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="div">
                    <a href="#" onClick={e => logOut()}>LogOut</a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default HeaderLogged;