import React from 'react'
import NavbarComponent from '../components/NavbarComponent'


function Home() {
    const navbarVoleeItem = ["Dashboard", "Create Volee", "Match with Volee"];
    const navbarNonProItem = ["Dashboard", "Create Provolee", "Match with Provolee"];
    const isLoggedIn = true
    if (isLoggedIn) {
      return <NavbarComponent navbarItem={navbarVoleeItem}></NavbarComponent>;
    }
  }


export default Home