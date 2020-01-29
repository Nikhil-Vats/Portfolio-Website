import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import headerStyles from './header.module.scss';

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import logo from "../../assets/logo.svg";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className={[headerStyles.header,headerStyles.safari_only].join(" ")}>
            {/* <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1> */}
            <nav>
                <ul className={headerStyles.navList}>
                    <li><img src={logo} /></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                </ul>
                <ul className={headerStyles.socialLinks}>
                    <li><a href="https://github.com/Nikhil-Vats" target="_blank"><img src={github} /></a></li>
                    <li><a href="https://www.linkedin.com/in/nikhil-vats/" target="_blank"><img src={linkedin} /></a></li>
                    <li><a href="https://twitter.com/NikhilVatss" target="_blank"><img src={twitter} /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;