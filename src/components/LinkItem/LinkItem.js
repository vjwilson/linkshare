import React from 'react';

import './LinkItem.css';

const LinkItem = ({ favoriteCount, linkUrl }) => {
  const faves = favoriteCount || 0;

  return (
    <div className="link-item">
      <div className="link-item-faves">{faves}</div>
      <div className="link-item-info">
        <a className="link-item-link" href={linkUrl}>{linkUrl}</a>
      </div>
    </div>
  );
};

export default LinkItem;
