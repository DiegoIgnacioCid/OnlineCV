import React from 'react'
import '../../styles.css';
import Skillitem from './Skillitem';

const Skills = () => {
  return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                    {/* <li className="list-inline-item"><i className="fab fa-angular"></i></li> */}
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    <li className="list-inline-item"><i className="fab fa-github"></i></li>
                    <li className="list-inline-item"><i className="fab fa-git"></i></li>
                    {/* <li className="list-inline-item"><i className="fab fa-less"></i></li> */}
                    {/* <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                    <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                    <li className="list-inline-item"><i className="fab fa-grunt"></i></li> */}
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    
                    <Skillitem
                        description={"Mobile-First, Responsive Design"}
                    ></Skillitem>
                    <Skillitem
                        description={"Cross browser testing and debugging"}
                    ></Skillitem>
                    <Skillitem
                        description={"BEM, Atomic and other methodologies"}
                    ></Skillitem>
                    <Skillitem
                        description={"Agile development & Scrum"}
                    ></Skillitem>
                    
                    
                </ul>
            </div>
        </section>
  )
}

export default Skills