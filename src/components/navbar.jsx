import React, { Component } from 'react';
class NavBar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar 
                        <span className="badge badge-oill padge-secondary">
                            {this.props.totalCounters}
                        </span>
                    </a>
                </div>
            </nav>
        );
    }
}
  
export default NavBar;