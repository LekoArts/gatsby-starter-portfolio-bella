import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import { rgba } from 'polished';
import { randomNumber } from '../utils/randomNumber';

const Item = styled(Flex)`
  flex-basis: calc(99.9% * 1 / 2 - 4rem);
  max-width: calc(99.9% * 1 / 2 - 4rem);
  width: calc(99.9% * 1 / 2 - 4rem);
  text-align: center;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-top: 3rem !important;
  }
`;

const ItemTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  transform: translateY(0rem);
`;

const ItemSubtitle = styled.p`
  color: ${props => props.theme.colors.greyMedium};
`;

const Overlay = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => rgba(`${props.theme.colors.primary}`, 0.6)};
  z-index: 10;
  opacity: 0;
  transition: opacity 300ms ease-out;
  span {
    z-index: 20;
    color: ${props => props.theme.colors.bg};
    font-size: 1.5rem;
    opacity: 0;
    transition: opacity 300ms ease-out;
    &:first-child {
      transition: transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
      transform: translateY(2rem);
    }
    &:last-child {
      font-size: 3.5rem;
      line-height: 3rem;
      transition: transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
      transform: translateY(4rem);
      font-family: ${props => props.theme.fontFamily.heading};
    }
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  .gatsby-image-outer-wrapper {
    position: static !important;
    > div {
      position: static !important;
    }
  }
  &:hover {
    transform: scale(0.95);
    ${Overlay} {
      opacity: 1;
      span {
        opacity: 1;
        &:first-child {
          transform: translateY(0);
        }
        &:last-child {
          transform: translateY(0);
        }
      }
    }
  }
  &:hover + ${ItemTitle} {
    transform: translateY(-1rem);
    color: ${props => props.theme.colors.primary};
  }
`;

const GridItem = ({ uid, sizes, alt, title, subtitle }) => (
  <Item flexDirection="column" key={uid} style={{ marginTop: `${randomNumber(4, 8) * 2}rem` }}>
    <StyledLink to={uid}>
      <Overlay justifyContent="center" alignItems="center" flexDirection="column">
        <span>view</span>
        <span>case study</span>
      </Overlay>
      <Image sizes={sizes} alt={alt} />
    </StyledLink>
    <ItemTitle>{title}</ItemTitle>
    <ItemSubtitle>{subtitle}</ItemSubtitle>
  </Item>
);

export default GridItem;

GridItem.propTypes = {
  uid: PropTypes.string.isRequired,
  sizes: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
