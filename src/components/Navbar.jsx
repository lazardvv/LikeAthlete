import React from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './UserInitials.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, logout, getUserInitials } = useAuth();
    const navigate = useNavigate();

    function handleMenuToogle() {
        setShowMenu(!showMenu)
    }

    function handleUserMenuToggle() {
        setShowUserMenu(!showUserMenu)
    }

    async function handleLogout() {
        try {
            await logout();
            navigate('/');
            setShowUserMenu(false);
        } catch (error) {
            console.error('Logout error:', error);
        }
    }



    return (
        <div className='header'>
            <nav className='nav container'>
                <div className='nav__data'>
                    <div className='nav__logo'>
                        <a><i className='ri-planet-line'></i>Like<span className='athlete-text'>ATHLETE</span></a>
                    </div>
                    <div className={showMenu ? 'nav__toogle show-icon' : 'nav__toogle'} onClick={handleMenuToogle}>
                        <i className='ri-menu-line nav__burger'></i>
                        <i className='ri-close-line nav__close'></i>
                    </div>
                </div>
                <div className={showMenu ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className='nav__list'>
                        <NavLink to='/'><li className='nav__link'>Home</li></NavLink>
                        <NavLink to='exploreathletes'><li className='nav__link'>Explore Athletes</li></NavLink>

                        <li className='dropdown__item'>
                            <div className='nav__link'>
                                Analytics<i className='ri-arrow-down-s-line dropdown__arrow'></i>
                            </div>
                            <ul className='dropdown__menu'>
                                <NavLink to='overview'><li className="dropdown__link"><i className='ri-pie-chart-line'>Overview</i></li></NavLink>
                                <NavLink to='savedexercises'><li className="dropdown__link"><i className='ri-arrow-up-down-line'>Saved exercises</i></li></NavLink>

                                <li className='dropdown__subitem'>
                                    <div className="dropdown__link">
                                        <i className='ri-bar-chart-line'></i>Reports<i className='ri-add-line dropdown__add'></i>
                                    </div>
                                    <ul className="dropdown__submenu">
                                         <NavLink to='workoutcreator'><li className='dropdown__sublink'><i className='ri-file-list-line'></i>WorkoutCreator</li></NavLink>
                                         <NavLink to='payments'><li className='dropdown__sublink'><i className='ri-cash-line'></i>Payments</li></NavLink>
                                         <NavLink to='refunds'><li className='dropdown__sublink'><i className='ri-refund-2-line'></i>Refunds</li></NavLink>
                                    </ul>
                                </li>

                            </ul>

                        </li>

                        <NavLink to='exercises'><li className='nav__link'>Exercises</li></NavLink>

                        <li className='dropdown__item'>
                            <div className='nav__link'>
                                Users<i className='ri-arrow-down-s-line dropdown__arrow'></i>
                            </div>

                            <ul className='dropdown__menu'>
                               <NavLink to='users'> <li className="dropdown__link"><i className='ri-user-line'></i>Users</li></NavLink>
                                 <NavLink to='accounts'><li className="dropdown__link"><i className='ri-lock-line'></i>Accounts</li></NavLink>
                                <NavLink to='messages'> <li className="dropdown__link"><i className='ri-message-3-line'></i>Messages</li></NavLink>
                            </ul>

                        </li>

                        <NavLink to='contact'><li className='nav__link'>Contact</li></NavLink>

                        {!user ? (
                            <NavLink to='login'><li className='nav__link login-button'>Login</li></NavLink>
                        ) : (
                            <li className='dropdown__item'>
                                <div className='nav__link user-initials' onClick={handleUserMenuToggle}>
                                    <div className='user-initials-button'>
                                        {getUserInitials()}
                                    </div>
                                </div>
                                {showUserMenu && (
                                    <ul className='dropdown__menu user-dropdown'>
                                        <li className="dropdown__link" onClick={handleLogout}>
                                            <i className='ri-logout-box-line'></i>Logout
                                        </li>
                                    </ul>
                                )}
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
