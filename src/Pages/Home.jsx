import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

function Home() {
    const navbarItem = ["Dashboard", "Create Provolee", "Match with Volee"];

  return (
    <div>
        <NavbarComponent navbarItem={navbarItem}></NavbarComponent>
    </div>
  )
}

export default Home