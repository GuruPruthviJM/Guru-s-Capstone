import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../CSS/customer_module/DTS.css';

const Home = () => {
  return (
    <div className="dt-body-container container-fluid my-5">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          

          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6 dt-text-section">
                <h1>Beyond the Curve: Key industry-shaping technology themes for 2025!</h1>
                
              </div>
              <div className="col-md-6 text-center dt-image-section">
                <img src="/beyond.png" alt="Data and AI" className="img-fluid rounded" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6 dt-text-section">
                <h1>Envisioning new relevance in the age of AI</h1>
                <p className="lead">We carve out new possibilities every day. Where technology and human ingenuity converge to usher in new frontiers of innovation and relevance.</p>
              </div>
              <div className="col-md-6 text-center dt-image-section">
                <img src="/digital.png" alt="Platform and Product Engineering" className="img-fluid rounded" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6 dt-text-section">
                <h1>Engineering at the heart of everything</h1>
                <p className="lead">Every organization's digital journey is unique. We create bespoke solutions that engineer your tomorrow, today.</p>
              </div>
              <div className="col-md-6 text-center dt-image-section">
                <img src="/engheart.png" alt="Cloud and Infrastructure" className="img-fluid rounded" />
              </div>
            </div>
          </div>

          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-md-6 dt-text-section">
                <h1>Pioneering tomorrow's generative enterprises</h1>
                <p className="lead">We build with AI to give you a competitive edge and become generative enterprisesTM of the future</p>
              </div>
              <div className="col-md-6 text-center dt-image-section">
                <img src="/Creative.png" alt="Digital Transformation" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" aria-label="Previous">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" aria-label="Next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
};

export default Home;
