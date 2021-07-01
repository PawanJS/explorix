import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkWrapper>
        <FooterDescription>
          <h4>Explorix</h4>
          <p>We strive ti create the best experience for our customers</p>
        </FooterDescription>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="./">Contact</FooterLink>
          <FooterLink to="./">Destination</FooterLink>
          <FooterLink to="./">About</FooterLink>
          <FooterLink to="./">Sponsors</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="./">Submit Video</FooterLink>
          <FooterLink to="./">Ambassadors</FooterLink>
          <FooterLink to="./">Agency</FooterLink>
          <FooterLink to="./">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="./">Instagram</FooterLink>
          <FooterLink to="./">Facebook</FooterLink>
          <FooterLink to="./">YouTube</FooterLink>
          <FooterLink to="./">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`

const FooterDescription = styled.div`
  padding: 0 2rem;

  h4 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  } ;
`

const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
