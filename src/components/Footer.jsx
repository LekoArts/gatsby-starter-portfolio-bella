import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import { Flex } from 'grid-emotion';

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.greyDark};
  color: ${props => props.theme.colors.greyLight};
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const StyledLink = styled(Link)`
  &:before {
    content: '←';
    padding-right: 8px;
  }
`;

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Flex justifyContent="space-between" p={4}>
        {isCase ? (
          <React.Fragment>
            <StyledLink>Return to home</StyledLink>
            <div>Contact Us</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              Copyright &copy; {year} by <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-bella">Bella GitHub Repository</a>.
              Pictures by <a href="https://unsplash.com/">Unsplash</a>. Illustrations by{' '}
              <a href="https://undraw.co/illustrations">Undraw</a>.
            </div>
            <div>Snapchat &mdash; Musicaly &mdash; Twitter</div>
          </React.Fragment>
        )}
      </Flex>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool,
};

Footer.defaultProps = {
  isCase: false,
};
