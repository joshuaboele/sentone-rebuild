import React from 'react';

import stylesheet from 'styles/projecten.scss';

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="projects">
      <div className="wilgenwende">
        <p className="project-name"> Wilgenwende</p>
        <a href="/projecten/wilgenwende" className="case-button">
          Bekijk Project
        </a>
      </div>
      <div className="spijk">
        <p className="project-name"> Spijk</p>
        <a href="/projecten/spijk" className="case-button">
          Bekijk Project
        </a>
      </div>
    </div>
  </div>;
{
}
