import React from "react"
import "./navbar.css";

const Navbar = () =>{
    return(
        <>
            <nav className="main-nav">
                {/*1st logo part */}
                <div className="logo">
                    <h2>District Court</h2>
                </div>
                    {/*2nd menu part */}
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/about">About Us</a>
                        </li>

                        <li>
                            <a href="/search">CNR No.</a>
                        </li>

                        <li>
                            <a href="/case">Case Type</a>
                        </li>

                        <li>
                            <a href="/form">Add Our Case</a>
                        </li>
                    </ul>
        
                </div>

            </nav>
            {/*Hero section */}


            
        </>
    )
}


export default Navbar