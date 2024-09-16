// src/components/About/About.js
import React from 'react';
import './About.css';

const About = () => (
  <section id="about">
    <div className="container mt-4 pt-4">
      <h1 className="text-center">About Me</h1>
      <div className="row mt-4">
        <div className="col-lg-4">
          <img src="/sandesh image.jpg" className="imageAboutPage" alt="Sandesh"/>
        </div>
        <div className="col-lg-8">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro mollitia reiciendis minus doloremque in, quis provident maiores accusantium nesciunt suscipit possimus vero numquam aperiam cum omnis dicta voluptates sequi!</p>
          <div className="row mt-3">
            <div className="col-md-6">
              <ul>
                <li>Name: Sandesh Yadav</li>
                <li>Age: 19</li>
                <li>Occupation: IT Student</li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quas qui libero nisi facere. Soluta amet deserunt temporibus, consectetur at ullam earum minus aliquam asperiores ducimus eos voluptatibus nulla atque iste excepturi quod, provident vel consequatur quos enim ab. Sint quae consequuntur omnis laudantium animi error perferendis ipsam cumque modi!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
