// src/components/Contact/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact">
    <div className="container mt-3 contactContent">
      <h1 className="text-center">Contact Me</h1>
      <div className="row mt-4">
        <div className="col-lg-6">
          <div style={{maxWidth: '100%', overflow: 'hidden', color: 'red', width: '500px', height: '500px'}}>
            <div style={{textDecoration: 'none', overflow: 'hidden', maxWidth: '100%', width: '500px', height: '500px'}}>
              <div id="canvas-for-googlemap" style={{height: '100%', width: '100%', maxWidth: '100%'}}>
                <iframe style={{height: '100%', width: '100%', border: '0'}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=worli&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
              </div>
              <a className="our-googlemap-code" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="enable-map-info">premium bootstrap themes</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form>
            <input type="text" className="form-control form-control-lg" placeholder="Name"/>
            <input type="email" className="form-control mt-3" placeholder="Email"/>
            <input type="text" className="form-control mt-3" placeholder="Subject"/>
            <div className="mb-3 mt-3">
              <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
            </div>
          </form>
          <button type="button" className="btn btn-success mt-3">Contact Me</button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
