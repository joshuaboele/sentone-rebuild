import React from 'react';

import stylesheet from 'styles/contact.scss';

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="contact">
      <div className="contact-slogan">
        <h1>Als u een vraag heeft, horen wij het graag.</h1>
        <h1>Doorgaans nemen wij binnen een dag contact met u op</h1>
      </div>
      <div className="contact-info">
        <div className="contact-content">
          <h3>Theo Witjes</h3>
          <p>
            <img src="/static/imgs/phone.svg" /> <a href="tel:0652570863">+31 (0)6 5250 2622</a>
          </p>
          <p>
            <img src="/static/imgs/mail.svg" /> <a href="mailto:Witjes@sentone.nl"> witjes@sentone.nl </a>
          </p>
        </div>
        <div className="contact-content">
          <h3>Johan Groeneweg</h3>
          <p>
            <img src="/static/imgs/phone.svg" /> <a href="tel:0652570863">+31 (0)6 5433 0952</a>
          </p>
          <p>
            <img src="/static/imgs/mail.svg" /> <a href="mailto:groeneweg@sentone.nl"> groeneweg@sentone.nl </a>
          </p>
        </div>
      </div>
    </div>
    <div className="contact-form">
      <span>Contactformulier</span>
      <form id="submitform">
        <p>
          <label htmlFor="name">
            Naam
            <span className="asterisk"> *</span>
          </label>
          <input type="text" className="" name="Name" placeholder=" Naam" />
        </p>

        <p>
          <label htmlFor="name">
            Email
            <span className="asterisk"> *</span>
          </label>
          <input type="text" className="" name="Email" placeholder=" E-mail" />
        </p>

        <p>
          <label htmlFor="name">
            Telefoonnummer
            <span className="asterisk"> *</span>
          </label>
          <input type="text" className="" name="Phone" placeholder="Telefoonnummer" />
        </p>

        <p>
          <label htmlFor="name">Onderwerp</label>
          <select className="" name="Subject">
            <option value="1">Grond Kopen</option>
            <option value="2">Grond Verkopen</option>
            <option value="3">Grondsanering</option>
            <option value="4">Geluidswallen</option>
          </select>
        </p>

        <p>
          <label htmlFor="name">Bericht</label>
          <input type="text" className="form-message" name="Message" />
        </p>
      </form>

      <button className="submit-button" type="submit" form="submitbutton" value="Submit">
        Verzend
      </button>
    </div>
  </div>;
