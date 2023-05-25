import React from 'react';

const PageLink = (props) => {
  const { href, text, className } = props;
  return (
    <li>
      <a href={href} className={className}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
