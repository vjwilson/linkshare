import React from 'react';

import LinkItem from '../LinkItem/LinkItem';

import './LinkList.css';

const LinkList = ({ links, increment }) => {
  const cleansedLinks = Array.isArray(links)
    ? links
    : [];

  const linkItems = cleansedLinks.map((link, index) => {
    return (
      <LinkItem
        key={index}
        favoriteCount={link.favorites}
        linkUrl={link.linkUrl}
        action={increment}
      />
    );
  });

  return (
    <div className="link-list">
      {linkItems}
    </div>
  );
};

export default LinkList;
