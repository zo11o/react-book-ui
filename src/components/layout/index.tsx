import React,{Component} from 'react'
import Nav from '../nav'

class Layout extends Component{
    render (){
      return (<nav className="layout-nav">
        { this.props.children }
        <Nav></Nav>
      </nav>)
    }
  }
export default Layout