import React from 'react';
import SocialLink from './SocialLink';

const SocialLinks = (props) => {
  const { socialLinks, parentClass, childClass } = props;
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <SocialLink key={id} href={href} icon={icon} className={childClass} />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
