import React from 'react'
import { BtnProfile } from './components/Button';
import DropdownMenu from './components/DropdownMenu';
import "./components/navbar.scss";

const NavBar = ({ auth, titlePage, children }) => {

    return (
            <header>
                <nav className='navbar'>
                    <nav className='nav-breadcrumb'>
                        <ul className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <span>Copa LF</span>
                            </li>
                            <li className='breadcrumb-item'>
                                <span>|</span>
                            </li>
                            <li className='breadcrumb-item'>
                                <span>{titlePage}</span>
                            </li>
                        </ul>

                        <div className='nav-breadcrumb-page'>{titlePage}</div>
                    </nav>
                    {children}

                    <nav className='menu'>
                        <div className="header-btn">
                            <BtnProfile 
                            userName="Leandro Franceschini" >
                                <DropdownMenu user="Leandro Franceschini" auth={auth} />
                            </BtnProfile>
                        </div>
                    </nav>
                </nav>

            </header>
    )
}


export default NavBar