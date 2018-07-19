import React from 'react';

export default () =>
  <div>
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          id="myVideo"
          src="https://www.youtube.com/embed/NuA_rsulH7U?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=NuA_rsulH7U"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>

    <div className="logo">
      <img src="/static/imgs/logo_1.svg" alt="" />
      <p>Grond Grondig Geregeld.</p>
      <h2>
        Wij regelen al uw <span className="services">bodem en grond</span>zaken
      </h2>
      <a href="/contact" className="contactButton">
        Contact
      </a>
    </div>
  </div>;
