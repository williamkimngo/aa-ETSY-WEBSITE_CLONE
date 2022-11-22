import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../auth/LoginModal';
import './NavBar.css';
import SearchBar from './SearchBar';

const NavBar = () => {
    const user = useSelector(state => state.session.user);

    return (
        <nav>
            <div className='navBar-main'>
                <div className='navBar-outer'>
                    <div className='navBar-link'>
                        <NavLink exact to="/" activeClassName='active'>
                            <div className='navBar-home'>
                                <img src="https://i.imgur.com/G4xDlfp.jpg" alt="logo" className="logo" />
                            </div>
                        </NavLink>
                    </div>
                    <SearchBar />
                    {user ?
                        <>
                            <div className='navBar-link-icon'>
                            </div>
                            <div className='navBar-link-profile'>
                                <ProfileButton user={user} />
                            </div>
                        </>
                        :
                        <>
                            <div className='navBar-link sign-in'>
                                <LoginFormModal />
                            </div>
                        </>
                    }
                    <div className='navBar-link-icon'>
                        <NavLink to='/cart' exact={true} activeClassName='active'>
                            <div className='cart-pic'><img src="https://i.imgur.com/CWzhu6j.png" alt='cart'>

                            </img><span class="cartbubble">Cart</span></div>


                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
