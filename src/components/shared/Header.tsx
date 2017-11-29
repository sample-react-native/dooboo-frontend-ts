import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';

const styles: any = {
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100vw',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#d2d2d2',
    alignItems: 'stretch',
  },
  tab: {
    width: '33vw',
    textAlign: 'center',
    color: '#fff',
    fontSize: '15px',
    pointer: 'cursor',
    lineHeight: '50px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: 'rgb(13, 157, 197)',
    },
    active: {
      background: 'rgb(13, 157, 197)',
    },
  },
};

@Radium
class Header extends Component<any> {
  public render() {
    return (
      <div style={styles.container}>
          <NavLink
            exact={true}
            to='/tab'
            key={0}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            Main
          </NavLink>
          <NavLink
            to='/tab/readme'
            key={1}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            Read Me
          </NavLink>
          <NavLink
            to='/tab/test'
            key={2}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            Test Page
          </NavLink>
          <NavLink
            exact={true}
            to='/tab/fourth'
            key={3}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            tab 4
          </NavLink>
          <NavLink
            exact={true}
            to='/tab/fifth'
            key={4}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            tab 5
          </NavLink>
      </div>
    );
  }
}

export default Header;
