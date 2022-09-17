import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

function VoleeHome() {
    const navbarVoleeItem = ["Dashboard", "Create Volee", "Match with Volee"];
    const isLoggedIn = true
    if (isLoggedIn) {
      return <NavbarComponent navbarItem={navbarVoleeItem}></NavbarComponent>;
    }
  }
export default VoleeHome