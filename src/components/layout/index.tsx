import React,{Component} from 'react'
import Nav from '../nav'
// import styles from './styles';
import './index.css'
class Layout extends Component{
    render (){
      return (<div className="layout">
        <div className="layout-content">
          { this.props.children }
        </div>
        <div className="layout-footer">
          <Nav></Nav>
        </div>
        {/* <style jsx={true} global={true}>{styles}</style> */}
      </div>)
    }
  }
export default Layout