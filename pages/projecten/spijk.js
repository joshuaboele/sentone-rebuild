import React from 'react';

import stylesheet from 'styles/projecten.scss';

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="project-wrapper">
      <di className="project-img-2 spijk-img" />
      <h6 className="project-header">Spijk.</h6>
      <div className="project-description">
        <p>
          Aanleg van de geluidswal zoals voorzien in het plan van de aanleg van de tweede golfbaan (“De Zuidbaan”) van
          The Dutch te Spijk. Golfbaan The Dutch in Spijk biedt golf en bijbehorende (zakelijke) dienstverlening aan
          bedrijven en particulieren op het hoogste niveau van Nederland.
          <br />
          <br />
          Momenteel is er een 18 holes golfbaan (“The Dutch”) alwaar de afgelopen jaren de KLM Open (hét golftoernooi
          van Nederland) gehouden is. Deze vigerende baan wordt nu uitgebreid met een 9 holes baan (De Zuidbaan) met een
          oppervlak van 48 hectare. Om deze luxe voorziening af te schermen van Industrieterrein Linge III te Gorinchem
          en de Betuweroute en de A15.
          <br />
          <br />
        </p>
      </div>
    </div>
  </div>;
{
}
