import React from 'react';

import './LinkItem.css';

const LinkItem = ({ favoriteCount, linkUrl, action }) => {
  const faves = favoriteCount || 0;
  const onClick = ((e) => {
    action(linkUrl);
  });

  return (
    <div className="link-item">
      <div className="link-item-faves">
        <span className="fave-count">{faves}</span>
        <button onClick={onClick} className="add-fave">+</button>
      </div>
      <div className="link-item-info">
        <a className="link-item-link" href={linkUrl}>{linkUrl}</a>
      </div>
    </div>
  );
};

export default LinkItem;
