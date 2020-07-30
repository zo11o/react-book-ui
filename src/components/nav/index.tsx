import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
      <ul>
        <li><NavLink to="/home" activeClassName="selected">home</NavLink></li>
        <li><NavLink to="/users" activeClassName="selected">users</NavLink></li>
        <li><NavLink to="/books" activeClassName="selected">books</NavLink></li>
      </ul>
    )
}