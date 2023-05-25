import React from 'react';

const SocialLink = (props) => {
  const { href, icon, className } = props;
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
