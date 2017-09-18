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
        <h3>Theo Witjes</h3>
        <p>
          <img src="/static/imgs/phone.svg" /> 06 52 57 08 63
        </p>
        <p>
          <img src="/static/imgs/mail.svg" /> witjes@sentone.nl
        </p>

        <h3>Johan Groeneweg</h3>
        <p>
          <img src="/static/imgs/phone.svg" /> 06 52 57 08 63
        </p>
        <p>
          <img src="/static/imgs/mail.svg" /> groeneweg@sentone.nl
        </p>
      </div>
    </div>
    <div className="contact-form">
      <span>Contactformulier</span>
      <form id="submitform">
        <p>
          <label htmlFor="name">
            Naam
            <span className="asterisk">*</span>
          </label>
          <input type="text" className="" name="Name" placeholder="Joshua Boele" />
        </p>

        <p>
          <label htmlFor="name">
            Email
            <span className="asterisk">*</span>
          </label>
          <input type="text" className="" name="Email" placeholder="Josboele@gmail.com" />
        </p>

        <p>
          <label htmlFor="name">
            Telefoonnummer
            <span className="asterisk">*</span>
          </label>
          <input type="text" className="" name="Phone" placeholder=" 06 52 57 08 63" />
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
