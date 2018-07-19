import React from 'react';

import stylesheet from 'styles/diensten.scss';

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="container">
      <div className="header">
        <h1>Diensten</h1>
        <p className="diensten-desc">Hieronder zijn onze diensten uitgelegd.</p>
      </div>
      <ul className="flex-container wrap">
        <li className="flex-item">
          <img className="diensten-img" src="/static/imgs/truck.svg" />
          <div className="diensten-description">
            <h1 className="diensten-header">Grond en bouwstoffen leverancier</h1>
            <p className="diensten-paragraph">
              Zand, klei, veen, LD Staalslakken en granulaat zijn grondstoffen die gewonnen of geproduceerd worden in
              Nederland en zijn op afroep leverbaar. Ook speciale producten als bomenzand, teelaarde of houtsnippers
              kunnen op verzoek geleverd worden.
            </p>
          </div>
        </li>
        <li className="flex-item">
          <img className="diensten-img aa2" src="/static/imgs/recycle.svg" />
          <div className="diensten-description">
            <h1 className="diensten-header">Afvalstoffen</h1>
            <p className="diensten-paragraph">
              Dankzij ons netwerk regelen we de afvoer van afvalstoffen, geen lange wachtrijen.{' '}
            </p>
          </div>
        </li>
        <li className="flex-item">
          <img className="diensten-img" src="/static/imgs/frog-prince.svg" />
          <div className="diensten-description">
            <h1 className="diensten-header">Flora & Fauna</h1>
            <p className="diensten-paragraph">
              Toenemend worden onze relaties geconfronteerd met een verplichting vanuit het Bevoegd Gezag dat een
              archeologisch onderzoek of een inventarisatie van beschermde soorten verplicht. Wij hebben goede contacten
              op dit specifieke werkgebied en zorgen zo dat er geen onnodige vertraging plaats vindt.
            </p>
          </div>
        </li>
        <li className="flex-item">
          <img className="diensten-img" src="/static/imgs/building.svg" />
          <div className="diensten-description">
            <h1 className="diensten-header">Grootschalige Projecten</h1>
            <p className="diensten-paragraph">
              Naast ontgravingen en transport regelt SentOne ook ontwikkeling van: Parken, Geluidswallen, Golfbanen en
              aanvulling.
            </p>
          </div>
        </li>
        <li className="flex-item">
          <img className="diensten-img" src="/static/imgs/grass.svg" />
          <div className="diensten-description">
            <h1 className="diensten-header">Bodemonderzoek</h1>
            <p className="diensten-paragraph">
              Dankzij onze jaren lange ervaring, regelen wij bodemonderzoek van A tot Z. Van belang om te vermelden
              hierbij is wel dat Sent One alleen onderzoekt of laat onderzoeken als belanghebbende in een project.
              Alleen bij hoge uitzondering laten wij relaties gebruikmaken van onze expertise op dit gebied zonder dat
              wij als partner betrokken zijn bij verdere ontwikkelingen.
            </p>
          </div>
        </li>
        <li className="flex-item">
          <img className="diensten-img" src="/static/imgs/pick.svg" />
          <div className="diensten-description">
            <h1 className="diensten-header">Project samen mogelijk maken</h1>
            <p className="diensten-paragraph">
              Wij zijn hét bedrijf in Nederland die u gerust kan stellen. Nooit van ons gehoord ? Geen probleem, wij
              hebben voorbeelden voor u, lopende projecten en afgeronde projecten waar we u kunnen laten zien wat Sent
              One kan en zonder de ingewikkelde langlopende contracten waardoor u zich gevangen voelt.{' '}
            </p>
          </div>
        </li>
      </ul>

      {/* Mobile view */}

      <div className="item">
        <input type="checkbox" id="box-1" />
        <label htmlFor="box-1">Bodemonderzoek</label>
        <div>
          <h3>Bodemonderzoek</h3>
          <p>
            {' '}Dankzij onze jaren lange ervaring, regelen wij bodemonderzoek van A tot Z. Van belang om te vermelden
            hierbij is wel dat Sent One alleen onderzoekt of laat onderzoeken als belanghebbende in een project. Alleen
            bij hoge uitzondering laten wij relaties gebruikmaken van onze expertise op dit gebied zonder dat wij als
            partner betrokken zijn bij verdere ontwikkelingen.
          </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-2" />
        <label htmlFor="box-2">Grootschalige Projecten</label>
        <div>
          <h3>Grootschalige grondprojecten</h3>
          <p>
            {' '}Naast ontgravingen en transport regelt SentOne ook ontwikkeling van: Parken, Geluidswallen, Golfbanen
            en aanvulling.
          </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-3" />
        <label htmlFor="box-3">Flora & Fauna</label>
        <div>
          <h3>Flora & Fauna</h3>
          <p>
            {' '}Toenemend worden onze relaties geconfronteerd met een verplichting vanuit het Bevoegd Gezag dat een
            archeologisch onderzoek of een inventarisatie van beschermde soorten verplicht. Wij hebben goede contacten
            op dit specifieke werkgebied en zorgen zo dat er geen onnodige vertraging plaats vindt.
          </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-4" />
        <label htmlFor="box-4">Afvalstoffen</label>
        <div>
          <h3>Afvalstoffen</h3>
          <p> Dankzij ons netwerk regelen we de afvoer van afvalstoffen, geen lange wachtrijen. </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-5" />
        <label htmlFor="box-5">Grond en bouwstoffen leverancier</label>
        <div>
          <h3>Transport</h3>
          <p>
            {' '}Zand, klei, veen, LD Staalslakken en granulaat zijn grondstoffen die gewonnen of geproduceerd worden in
            Nederland en zijn op afroep leverbaar. Ook speciale producten als bomenzand, teelaarde of houtsnippers
            kunnen op verzoek geleverd worden.
          </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-6" />
        <label htmlFor="box-6">Samenwerking</label>
        <div>
          <h3>Project samen mogelijk maken</h3>
          <p>
            Wij zijn hét bedrijf in Nederland die u gerust kan stellen. Nooit van ons gehoord ? Geen probleem, wij
            hebben voorbeelden voor u, lopende projecten en afgeronde projecten waar we u kunnen laten zien wat Sent One
            kan en zonder de ingewikkelde langlopende contracten waardoor u zich gevangen voelt.
          </p>
        </div>
      </div>
    </div>
  </div>;
