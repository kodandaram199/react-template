/**
 * Created by kodanda_rama on 7/7/17.
 */
import React from 'react';

const TemplateHero = () => {
  return(
      <div className="header-image">
          <div className="bg-wrapper">
              <div className="container">
                  <div className="row">
                      <div className="row text-wrapper">
                          <h3 className="spacing head-line-height">This is the heading of image navbar</h3>
                          <h6 className="spacing para-line-height image-para-margin">This is the passage of image paragraph. This can be long paragraph as it wraps to its size</h6>
                          <div className="image-para-margin">
                              <i className="fa fa-play-circle inline"></i><p className="spacing play-text inline">Play Video</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default TemplateHero;