import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars1.githubusercontent.com/u/40287069?s=400&u=697620d448c3530e02e996a2db895e53ef780c5a&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Uche Uzoma</h2>
            <p className="subtitle">"A FullStack JavaScript Developer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};