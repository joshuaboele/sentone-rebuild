import React from 'react';

import stylesheet from 'styles/projecten.scss';

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="project-wrapper">
      <div className="project-img" />
      <h6 className="project-header">Wilgenwende.</h6>
      <div className="project-description">
        <p>
          Een Grootschalige Bodemtoepassing (GBT) aan de N3 te Dordrecht waar grond en baggerspecie tot en met klasse
          Industrie (Besluit Bodemkwaliteit) onder toezicht van de Omgevingsdienst Zuid Holland Zuid nuttig wordt
          hergebruikt tot een geluidswal tussen de nieuwe woonwijk “Wilgenwende” en de A16 en spoorlijn
          (Rotterdam-Antwerpen).
          <br />
          <br />
          Een strook van 850 bij 100 meter wordt omgevormd tot een samenspel van 7 losstaande piramides met elk een
          eigen beplantingsplan en functie (fiets- en wandelpaden, speelvelden etc.) voor de bewoners van de nieuwe
          woonwijk.
          <br />
          <br />
          De aanleg van de geluidswal is gestart in 2010 en zal naar huidige verwachting afgerond worden medio 2019.
          <br />
          <br />
          <br />
          <br />
          .{' '}
        </p>
      </div>
    </div>
  </div>;
{
}
