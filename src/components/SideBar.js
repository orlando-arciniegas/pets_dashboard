/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png'

/*---- Declared component ----------*/
function SideBar(){
    return(
        <React.Fragment>
            {/* Sidebar */}
            <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" exact="true" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="rounded-circle" src={logo} alt="logo" style={{width: '60px'}}/>
                    </div>
                </Link>

                {/* Divider */}
                <hr className="sidebar-divider my-0"/>

                {/* Divider */}
                <hr className="sidebar-divider"/>

                {/* Heading */}
                <div className="sidebar-heading">Dashboard - DS</div>

                {/* Nav Item */}
                <li className="nav-item ml-3">
                        <i className="fas fa-home"></i>
                        <Link exact="true" to="/" className="ml-2 text-white">Home</Link> 
                </li>

                {/* Nav Item */}
                <li className="nav-item ml-3">
                        <i className="fas fa-fw fa-folder"></i>
                        <Link to="/users" className="ml-2 text-white">Usuarios</Link> 
                </li>

                 {/* Nav Item */}
                 <li className="nav-item ml-3">
                        <i className="fas fa-fw fa-folder"></i>
                        <Link to="/products" className="ml-2 text-white">Productos</Link> 
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/* End of Sidebar */}
            
        </React.Fragment>
    )
}
export default SideBar;