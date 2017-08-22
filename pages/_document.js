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
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <header>
            <ul className="nav-desktop">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about/">About</a>
              </li>
              <li>
                <a href="/work/">Work</a>
              </li>
              <li>
                <a href="/clients/">Clients</a>
              </li>
              <li>
                <a href="/contact/">Contact</a>
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
                    <a href="/about" data-active={path === '/about'}>
                      Over Ons
                    </a>
                  </li>
                  <li>
                    <a href="/" data-active={path === '/'}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/referenties" data-active={path === '/referenties'}>
                      Referenties
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
