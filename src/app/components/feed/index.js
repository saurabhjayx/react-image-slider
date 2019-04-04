import React from 'react';
import ProjectShowcase from '../../elements/slider';
import { getDevice } from '../../handlers/deviceHandler';

const Feed = () => {
  return(
    <div className="feed">
      <h1 className="title">{getDevice() > 768 ? 'Desktop Slider' : 'Mobile Slider'}</h1>
        <div className="feed-items">
          <ProjectShowcase
            query={getDevice() > 768 ? 'mustang' : 'rose'}
          slideCount={6}
        />
        <ProjectShowcase
          query={getDevice() > 768 ? 'guitar' : 'bowling'}
          slideCount={6}
        />
      </div>
    </div>
  )
}

export default Feed;
