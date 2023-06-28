import React from 'react'

function Section2() {
    return (
        <div>
     <section className="section main-banner" id="top" data-section="section1">
    <video autoPlay muted loop id="bg-video">
      <source src="assets/images/course-video.mp4" type="video/mp4" />
    </video>
    <div className="video-overlay header-text">
      <div className="caption">
        <h6>Graduate School of Management</h6>
        <h2><em>Your</em> Classroom</h2>
        <div className="main-button">
          <div className="scroll-to-section"><a href="#section2">Discover more</a></div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Section2
