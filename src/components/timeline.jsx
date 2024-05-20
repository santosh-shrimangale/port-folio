import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>HMX Media<span>2024-present</span></h2>
                        <p>I have joined the HMX Media as a Software Developer in the Web Devolopment team, And Developed, maintained, and optimized real-time web and mobile
                          experiences for 3D products
                          Designed custom 3D models tailored to the specific needs of
                          clients
                          Worked with global clients including Dell, Lenovo, Royal Enfield,
                          Sharp, Maclaren, etc.
                          Utilized technologies such as React JS, TypeScript, WebGL,
                          WebXR, Web API, and Git
                          Ensured seamless and immersive user experiences across
                          platforms</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Yash Technologies <span>2022-2023</span></h2>
                        <p>I joined the Yash Technologies as a Fresher, UI trainee Developer, And Developed production-level code with React, Material UI, Redux
                          Toolkit, Typescript, and Webpack
                          Designed and implemented customized, reusable, and
                          responsive components
                          Proficient in React Js, Redux, Material UI, and CSS3 for front-end
                          development
                          Ensured adherence to best practices for scalable and
                          maintainable codebases
                          Collaborated effectively with cross-functional teams to deliver
                          high-quality solutions on schedule  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Aavid Software <span>09/2021-02/2022</span></h2>
                        <p>Completed training in HTML, CSS, JavaScript, Git, and ReactJS, in
                          front-end development
                          Contributed to team projects, applying learned skills in building
                          dynamic user interfaces </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Postgraduation at MGM<span>pursuing</span></h2>
                        <p>I am pursuing my post-graduation in (MCS) Master Of Computer Science After under-gradution BCS. I have taken course like web devolopment over the years and have better understanding of these subjects.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
