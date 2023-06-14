import React from 'react'
import "./NavBar.css";


function NavBar() {
    const commingSoon=()=>{
        alert('we are happy to see your exitment stay tooned will come soon👍')
    }
    return (
        <div className="navbar" >
            <div>            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
</div>
<nav class="main-nav">                
        <a onClick={commingSoon} >Home</a>
        <a onClick={commingSoon}>TV Shows</a>
        <a onClick={commingSoon}>Movies</a>
        <a onClick={commingSoon}>Originals</a>
        <a onClick={commingSoon}>Recently Added</a>
      </nav>
      <nav class="sub-Nav">
      <i class="fa fa-search" style={{color:'white', padding:'10px'}}></i>
      <i class="fa fa-bell" style={{color:'white', padding:'10px'}}></i>
          <a href="#">Account</a>        
      </nav>  
        </div>
    )
}

export default NavBar