import React, { Component } from 'react'
import logo from './assets/images/logo-add.jpg';
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={logo} width="5%" height="5%" alt="" />
                        <div>
                            <span className="address-text">Address</span><br />
                            <span className="address-text address-book">Book</span>
                        </div>
                    </div>
                    <div>
                        <span className="head-text"></span>
                    </div>

                </header>
            </div>
        )
    }
}

export default Header