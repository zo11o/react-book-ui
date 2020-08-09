import React from 'react'
import { NavLink } from "react-router-dom";
import css from './styles'
import './index.css';

type NavItem = {
  link: string
  imageDefault: string
  imageActive: string
}

type IProps = {
  sourceData: NavItem[]
  defaultIndex: number
}

type IState = {

}

export default function Nav () {


  return (
    <nav className="navigator">
      <ul>
        <li><NavLink to="/home" className="home"></NavLink></li>
        <li><NavLink to="/book" className="book"></NavLink></li>
        <li><NavLink to="/user" className="user"></NavLink></li>
      </ul>
      <style jsx={true}>{css}</style>
    </nav>
  )
}