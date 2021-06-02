import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function Header() {

  return (
    <div className='navbar'>
    <img className='pikachu'
      src={("https://64.media.tumblr.com/tumblr_m309yzdquq1qc3fjso1_500.gifv")} />
      <Link to ='/'>Pokédex</Link>
      <img
        className="logo"
        src={("https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pokemon-logo.png")} />
      <Link to='/MyTeam'>My Team</Link>
    </div>
  )
}

export default Header
