import React from 'react';
import PageLink from './PageLink';

const PageLinks = (props) => {
  const { pageLinks, parentClass, childClass } = props;
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <PageLink key={id} href={href} text={text} className={childClass} />
        );
      })}
    </ul>
  );
};

export default PageLinks;
