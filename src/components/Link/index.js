import React from 'react';
import PropTypes from 'prop-types';
import LinkIcon from './external-link-alt-solid.svg';

export default function Link({ children, linkIcon, ...otherProps }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...otherProps}>
      {<span>{children}</span>}
      {linkIcon && <LinkIcon style={{ width: '1rem', marginLeft: '5px' }} />}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.any.isRequired,
  linkIcon: PropTypes.bool,
};

Link.defaultProps = {
  linkIcon: false,
};
