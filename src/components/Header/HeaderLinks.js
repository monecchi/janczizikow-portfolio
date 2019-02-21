import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { FiMoon, FiSun } from 'react-icons/fi';
import HeaderLink from './HeaderLink';
import { Box, IconButton } from '../UI';
import { ThemeContext } from '../Theme/Theme';

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

const HeaderLinksNav = styled(Box)`
  display: none;

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const HeaderLinks = ({ links }) => {
  const theme = useContext(ThemeContext);
  let headerLinks = null;

  if (links) {
    headerLinks = links.map(link => (
      <HeaderLink key={link.text} to={link.to}>
        {link.text}
      </HeaderLink>
    ));
  }

  return (
    <HeaderLinksNav is="nav">
      {headerLinks}
      <IconButton color="headingColor" pl={3} onClick={theme.toggleTheme}>
        {theme.activeTheme === 'light' ? (
          <FiMoon size={24} />
        ) : (
          <FiSun size={24} />
        )}
      </IconButton>
    </HeaderLinksNav>
  );
};

HeaderLinks.propTypes = propTypes;

export default HeaderLinks;