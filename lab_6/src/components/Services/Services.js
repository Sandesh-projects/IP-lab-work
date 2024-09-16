// src/components/Services/Services.js
import React from 'react';
import './Services.css';

const Services = () => (
  <section id="services">
    <div className="container">
      <h1 className="text-center">Services</h1>
      <div className="row">
        <div className="col-lg-4 mt-4">
          <div className="card servicesText">
            <div className="card-body">
              <i className="fas servicesIcon fa-clock"></i>
              <h4 className="card-title mt-3">Web Development</h4>
              <p className="card-text mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita obcaecati aliquid non ex numquam. Illo atque pariatur reprehenderit nam maxime nihil vero fugit! Nemo, minus et! Dolorem totam soluta odio.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card servicesText">
            <div className="card-body">
              <i className='fas servicesIcon fa-layer-group'></i>
              <h4 className="card-title mt-3">Website Design</h4>
              <p className="card-text mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat odit qui inventore quasi fugiat ratione. Commodi labore eligendi, reprehenderit sequi quasi a eius nobis, ut aliquid deserunt id distinctio.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card servicesText">
            <div className="card-body">
              <i className='far servicesIcon fa-check-circle'></i>
              <h4 className="card-title mt-3">Website Deployment</h4>
              <p className="card-text mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid dolore inventore officia neque iste ipsum repudiandae tenetur libero nesciunt non assumenda doloribus qui voluptatem itaque quasi, magni incidunt sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
