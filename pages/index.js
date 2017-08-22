import React from 'react';

export default () =>
  <div>
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          id="myVideo"
          src="https://www.youtube.com/embed/lEEnapjdaV8?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=lEEnapjdaV8"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>

    <div className="logo">
      <img src="/static/imgs/logo.svg" alt="" />
      <p>Grond Grondig Geregeld.</p>
      <h2>
        Wij regelen al uw <span className="services">bodem en grond</span>zaken
      </h2>
      <a href="contact.html" className="contactButton">
        Contact
      </a>
    </div>
  </div>;
