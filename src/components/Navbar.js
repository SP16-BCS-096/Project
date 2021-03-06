import React from 'react';
function Navbar(){
return(
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Career Club</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="./">Home </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="./CandidateLogin">Candidate Portal </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="./RecruiterLogin">Recruiter Portal </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <a className="btn btn-outline-success my-2 my-sm-0" href="./AdminLogin" >Admin</a>
      
    </form>
  </div>
</nav>
</div>

  );  
}

export default Navbar;