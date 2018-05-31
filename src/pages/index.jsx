import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import GridItem from '../components/GridItem';
import BeTheHero from '../images/be_the_hero.svg';
import DataReport from '../images/data_report.svg';
import MayTheForce from '../images/may_the_force.svg';
import { randomNumber } from '../utils/randomNumber';

const Header = styled.header`
  width: 100%;
  height: 900px;
  position: relative;
  padding: 2rem;
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
`;

const Hero = styled(Flex)`
  height: 100%;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const Services = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
`;

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <React.Fragment>
    <Header>
      <Logo>Bella Inc.</Logo>
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <h1>
          We design and develop <br /> noice web applications.
        </h1>
        <h3>Hi, Bella Inc., the human form of the 💯 Emoji.</h3>
      </Hero>
    </Header>
    <Wrapper p={4} mb={7} mx="auto" justifyContent="space-between" flexWrap="wrap">
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          sizes={c.node.data.header_image.localFile.childImageSharp.sizes}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>
    <Services>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={6} justifyContent="space-between">
          <ServiceImage>
            <img src={BeTheHero} alt="Be The Hero" />
          </ServiceImage>
          <ServiceText>
            <h2>Digital Design Service</h2>
            <p>alskdö ölaksjdf ölaksdjöl alöjkdfalös löaksjdflöa öalksdj</p>
          </ServiceText>
        </Flex>
        <Flex w={1} py={6} justifyContent="space-between" flexDirection="row-reverse">
          <ServiceImage>
            <img src={DataReport} alt="Data Report" />
          </ServiceImage>
          <ServiceText>
            <h2>Digital Design Service</h2>
            <p>alskdö ölaksjdf ölaksdjöl alöjkdfalös löaksjdflöa öalksdj</p>
          </ServiceText>
        </Flex>
        <Flex w={1} py={6} justifyContent="space-between">
          <ServiceImage>
            <img src={MayTheForce} alt="May the Force" />
          </ServiceImage>
          <ServiceText>
            <h2>Digital Design Service</h2>
            <p>alskdö ölaksjdf ölaksdjöl alöjkdfalös löaksjdflöa öalksdj</p>
          </ServiceText>
        </Flex>
      </Wrapper>
    </Services>
    <Footer />
  </React.Fragment>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  sizes(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
