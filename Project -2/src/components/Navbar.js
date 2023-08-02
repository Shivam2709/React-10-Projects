import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div>
                <img className="logo" src="/images/logo.png" alt="" />
            </div>

            <ul> 
                <li>Home</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>

        </nav>

        <header className='header'>
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </header>

    </div>
  )
}

export default Navbar;