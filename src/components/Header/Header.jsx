import {Link} from "react-router-dom";
import React from "react";
import "./Header.less"

const  Header = () => {
    const menuList = [
        {name: "Sign Up", path:"/signup"},
        { name: "Home", path: "/home" },
        { name: "Services", path: "/services" },
        { name: "Register User", path: "/registration" },
        { name: "Register Restaurant", path: "/register-restaurant" },
        { name: "Log Out", path: "/" }
    ];

    return (
        <nav className={"nav-style"}>
            {menuList.map(item=>(
                <Link
                    to={item.path}
                    className={"link-style"}
                >
                    {item.name}
                </Link>
            ))}

        </nav>
    )
}

export default Header