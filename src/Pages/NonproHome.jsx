import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

function NonproHome() {
    const navbarNonproItem = ["Dashboard", "Create Volee", "Match with Volee"];
    const isLoggedIn = true
    if (isLoggedIn) {
      return <> 
      <NavbarComponent navbarItem={navbarNonproItem}></NavbarComponent>;
      </>
     
    }
  }


export default NonproHome