import React from 'react'
import classes from './Navbar.module.css'
import MyButton from './UI/Button/MyButton'

const Navbar = () => {
    return <div className={classes.nav}>
        <div><img src='../Image/Rectangle.png' /></div>
        <div className={classes.navBut}>
            <div><MyButton /></div>
            <div><MyButton /></div>
        </div>
    </div>
}

export default Navbar
