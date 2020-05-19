import React from "react"

function Header(){

    return(
      <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <div className="navbar-brand d-flex align-items-center">
          <img className="header-icon"  src= "https://www.freeiconspng.com/uploads/air-condition-icon-png-21.png" width="100" height="100"/> 
            <div className= "company">ReparAire</div>
          </div>
        </div>
      </div>
    </header>
    

    )
    
}

export default Header;