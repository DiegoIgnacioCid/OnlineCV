import React from 'react'
import '../../styles.css';



const Main = () => {
  return (
    <>
    <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Diego Ignacio 
                        <span className="text-primary"> Cid</span>
                    </h1>
                    <div className="subheading mb-5">
                        City of Buenos Aires, Argentina · 
                        <a href="mailto:name@email.com">ignaciociddev@gmail.com</a>
                    </div>
                    <p className="lead mb-5">With a background as an attorney providing services in top level law firms and as an inhouse counselor, I discovered a passion for web development, computer programming and IT in general. Educated in web development, JavaScript, ReactJS, Python, and other languages, libraries and frameworks. </p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        {/* <!-- <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a> -->
                        <!-- <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a> --> */}
                    </div>
                </div>
        </section>
    </>
  )
}

export default Main