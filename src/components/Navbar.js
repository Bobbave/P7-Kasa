import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../assets/logo.png";

export default function navbar() {
    return (
        <header>
                <img src={Logo} alt="Logo de Kasa" className="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/" end
                            className={({isActive}) =>
                                isActive ? "home_navbar active" : "home_navbar"
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about" 
                            className={({ isActive }) =>
                                isActive ? "about_navbar active" : "about_navbar"
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}