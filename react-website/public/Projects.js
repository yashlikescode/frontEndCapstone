import React from 'react';

export const Projects = () => {
  const headingStyle = {
    paddingBottom: '2%',
    paddingLeft: '10%',
    paddingTop: '6%',
  };

  const articleStyle = {
    paddingLeft: '10%',
    paddingRight: '10%',
  };

  const cardContainerStyle = {
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: '2%',
    paddingBottom: '2%',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '5px',
    alignSelf: 'center',
  };

  const borderedImageStyle = {
    width: '100%',
    border: '1px solid #4287f5',
    borderRadius: '5px',
    alignSelf: 'center',
  };

  const logoImageStyle = {
    borderRadius: '8%',
    alignSelf: 'center',
    padding: '5%',
  };

  const cardTitleStyle = {
    margin: '0', // remove default margin for consistency
  };

  const cardSubtitleStyle = {
    margin: '0', // remove default margin for consistency
    color: 'var(--text-body-secondary)', // You should define this CSS variable
  };

  return (
    <div>
      <h2 id="project-section" className="text-primary unselect" style={headingStyle}>
        Projects
      </h2>
      <article id="all-projects" style={articleStyle}>
        <div className="container-fluid">
          {/* Project 1 */}
          <div className="col-12">
            <div style={cardContainerStyle}>
              <div className="card projcard">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-xs-12" style={{ display: 'flex' }}>
                      <img style={imageStyle} src="resume-parser.png" alt="Resume Parser Screenshot" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="card-body">
                        <h4 className="card-title unselect" style={cardTitleStyle}>Resume Parser</h4>
                        <h6 className="card-subtitle mb-2 text-body-secondary unselect" style={cardSubtitleStyle}>2023</h6>
                        <p className="card-text unselect">
                          <ul className="unselect">
                            <li>Developed a resume parser which can be used to parse single or multiple resumes at once.</li>
                            <li>Used: Google Colab, Python, Spacy, Pandas</li>
                          </ul>
                        </p>
                        [<a href="https://github.com/stlyash/spacyResumeParcer" target="_blank">Link to GitHub</a>]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-12">
            <div style={cardContainerStyle}>
              <div className="card projcard">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-xs-12" style={{ display: 'flex' }}>
                      <img style={borderedImageStyle} src="drigingtech.png" alt="Driving Technique Evaluation Screenshot" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="card-body">
                        <h4 className="card-title unselect" style={cardTitleStyle}>
                          Website for Evaluation of Driving Technique of Loco Pilots
                        </h4>
                        <h6 className="card-subtitle mb-2 text-body-secondary unselect" style={cardSubtitleStyle}>2021</h6>
                        <p className="card-text unselect">
                          <ul className="unselect">
                            <li>It evaluates driving technique of loco pilots based on Speed-Time Chart of their journey.</li>
                            <li>Created using Google Chart API, HTML, CSS, JavaScript</li>
                          </ul>
                        </p>
                        [<a href="https://stlyash.github.io/Driving/" target="_blank">Link to GitHub</a>]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-12">
            <div style={cardContainerStyle}>
              <div className="card projcard">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-xs-12" style={{ display: 'flex' }}>
                      <img style={logoImageStyle} src="matrix-man-logo.png" alt="Matrix Man - Matrix Calculator" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="card-body">
                        <h4 className="card-title unselect" style={cardTitleStyle}>Matrix Man - Matrix Calculator</h4>
                        <h6 className="card-subtitle mb-2 text-body-secondary unselect" style={cardSubtitleStyle}>Android App</h6>
                        <p className="card-text unselect">
                          <ul className="unselect">
                            <li>It is an app that calculates Determinant, Inverse, and Adjoint of a Matrix.</li>
                            <li>It can also calculate the solution of a Quadratic Equation and a System of Linear Equations.</li>
                            <li>Created on MIT App Inventor</li>
                          </ul>
                        </p>
                        [<a href="https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.MatrixMan" target="_blank">Link to Play Store</a>]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-12">
            <div style={cardContainerStyle}>
              <div className="card unselect projcard">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-xs-12" style={{ display: 'flex' }}>
                      <img style={logoImageStyle} src="cpp-stl-logo.png" alt="C++ STL Libraries from GitHub" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="card-body">
                        <h4 className="card-title unselect" style={cardTitleStyle}>C++ STL Libraries from GitHub</h4>
                        <h6 className="card-subtitle mb-2 text-body-secondary unselect" style={cardSubtitleStyle}>Android App</h6>
                        <p className="card-text unselect">
                          <ul>
                            <li>It introduces different STL Libraries present in C++ like Set, Vectors, Stacks, etc.</li>
                            <li>Created on MIT App Inventor</li>
                          </ul>
                        </p>
                        [<a href="https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.stlcpp" target="_blank">Link to Play Store</a>]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
