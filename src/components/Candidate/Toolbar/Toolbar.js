import React from 'react';
import "./Toolbar.css";
import * as Survey from "survey-react";


import "survey-react/survey.css";


const toolbar = (props) =>
{
    return(
        
    <header className="toolbar">
    <nav className="toolbar_navigation">
        
            <div className="toolbar_logo">
              
                
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/PreviousJobs">Applied Jobs</a></li>
                    
                    <a href="Questionnare">
              Questionnare
          </a>
                </ul>
            </div>
        
    </nav>
</header>
    );
}

export default toolbar;