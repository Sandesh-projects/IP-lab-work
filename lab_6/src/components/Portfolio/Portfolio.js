// src/components/Portfolio/Portfolio.js
import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <section id="portfolio">
    <div className="container mt-3">
      <h1 className="text-center">Project</h1>
      <div className="row">
        <div className="col-lg-4 mt-4">
          <div className="card">
            <img className="card-img-top" src="/youtubeicon.jpg" alt="YouTube Clone" style={{width: '100%'}} height="200"/>
            <div className="card-body">
              <h4 className="card-title">YouTube Clone</h4>
              <p className="card-text">Yet to be made</p>
              <div className="text-center">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card portfolioContent">
            <img className="card-img-top" src="/quiz.jpg" alt="Quiz App" style={{width: '100%'}} height="200"/>
            <div className="card-body">
              <h4 className="card-title">Quiz App</h4>
              <p className="card-text">Yet to be made</p>
              <div className="text-center">
                <a href="#" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card portfolioContent">
            <img className="card-img-top" src="/flipkaart.png" alt="Flipkart Clone" style={{width: '100%'}} height="200"/>
            <div className="card-body">
              <h4 className="card-title">Flipkart Clone</h4>
              <p className="card-text">Yet to be made</p>
              <div className="text-center">
                <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-4 mt-4">
          <div className="card portfolioContent">
            <img className="card-img-top" src="/twitter.png" alt="Twitter Clone" style={{width: '100%'}} height="200"/>
            <div className="card-body">
              <h4 className="card-title">Twitter Clone</h4>
              <p className="card-text">Yet to be made</p>
              <div className="text-center">
                <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card portfolioContent">
            <img className="card-img-top" src="/blog.png" alt="Blog App" style={{width: '100%'}} height="200"/>
            <div className="card-body">
              <h4 className="card-title">Blog App</h4>
              <p className="card-text">Yet to be made</p>
              <div className="text-center">
                <a href="#" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
