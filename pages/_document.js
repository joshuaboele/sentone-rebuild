import Router from 'next/router';
import Document, { Head, Main, NextScript } from 'next/document';

import stylesheet from 'styles/main.scss';

export default class MyDocument extends Document {
  render() {
    const path = this.props.__NEXT_DATA__.pathname;
    console.log(path);
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <header>
            <ul className="nav-desktop">
              <li className="nav-home">
                <a className="nav-home" href="/index">
                  Home
                </a>
              </li>
              <li>
                <a href="/projecten">Projecten</a>
              </li>
              <li>
                <a href="/diensten">Diensten</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="static/imgs/Voorwaarden.pdf" target="_blank">
                  Algemene Voorwaarden
                </a>{' '}
              </li>
            </ul>
            <div className="nav-mobile">
              <input id="burger" type="checkbox" className="hidden" />

              <label htmlFor="burger">
                <span />
                <span />
                <span />
              </label>
              <h1 className="nav-position">MENU</h1>

              <nav>
                <ul className="menu-toggle">
                  <li>
                    <a href="/projecten" data-active={path === '/projecten'}>
                      Projecten
                    </a>
                  </li>
                  <li>
                    <a href="/diensten" data-active={path === '/diensten'}>
                      Diensten
                    </a>
                  </li>
                  <li>
                    <a href="/contact" data-active={path === '/contact'}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="static/imgs/Voorwaarden.pdf" target="_blank">
                      Voorwaarden
                    </a>{' '}
                  </li>
                  <li>
                    <a href="/" data-active={path === '/'}>
                      Home
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
