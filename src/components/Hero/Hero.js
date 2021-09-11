import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { mine } from "../../constants/constants";
import { Me } from "../Projects/ProjectsStyles";

const handleClick = () => {
  document.location.href = "https://www.linkedin.com/in/ayoub-moujane-a787b0160/"
}

const prefix = '/Portfolio_ready',

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Me src={prefix + mine.me} />
          <br/>
          Hey, I'm Ayoub <br/>
        </SectionTitle>

        <SectionText>
        I'm a software engineer with over five years of experience
        working in the tech industry, providing valuable expertise
        to start-up businesses.
        </SectionText>
        <Button onClick={handleClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;