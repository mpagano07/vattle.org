import React, { Component } from 'react';
import { Navbar, NavItem, } from 'react-materialize';

class Navy extends Component {

  render() {

    return (
      <div className='Navy'>
        <Navbar className="Nav" right brand='Vattle.org'>
          <NavItem href='/inicio'>Home</NavItem>
          <NavItem href='/registro'>Subscribirse</NavItem>
          <NavItem href='/users'>Usuarios</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navy;