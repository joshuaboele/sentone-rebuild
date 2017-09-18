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
      <div className="item">
        <input type="checkbox" id="box-1" />
        <label htmlFor="box-1">Bodem</label>
        <div>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quo, culpa enim ab esse labore
            recusandae quis sit molestiae reiciendis praesentium alias accusamus in voluptas atque, iure mollitia neque.
            Veritatis.
          </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-2" />
        <label htmlFor="box-2">Grondwerken / GWW</label>
        <div>
          <h3>Grondstromenlogistiek is de sleutel</h3>
          <p>
            Naast ontgraven en transport regelt Sent One ook de ontwikkeling van geluidwallen, parken, golfbanen en
            aanvullingen (zoals: bodemverbetering of natuurontwikkeling) inclusief alle benodigde vergunningen en
            meldingen.
          </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-3" />
        <label htmlFor="box-3">Afvalstoffen</label>
        <div>
          <h3>To be or not to be, that is the question</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quo, culpa enim ab esse labore
            recusandae quis sit molestiae reiciendis praesentium alias accusamus in voluptas atque, iure mollitia neque.
            Veritatis.
          </p>
        </div>
      </div>
      <div className="item">
        <input type="checkbox" id="box-4" />
        <label htmlFor="box-4">Grondstoffen</label>
        <div>
          <h3>Zand, klei, veen en granulaat</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quo, culpa enim ab esse labore
            recusandae quis sit molestiae reiciendis praesentium alias accusamus in voluptas atque, iure mollitia neque.
            Veritatis.
          </p>
        </div>
      </div>
    </div>
  </div>;
