import React from 'react';
import { DiCode, DiCodeBadge, DiDocker, DiFirebase, DiGit, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';



const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with various types of projects and
      have mastered multiple programming languages and
      coding as well as software testing and debugging.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Nest.JS and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Docker/Kubernetes </ListTitle>
          <ListParagraph>
            Experience with <br />
            Docker, Docker-Machine, Docker-Compose and Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>C/C++</ListTitle>
          <ListParagraph>
            Experience with <br />
            C and C++
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <picture>
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>GIT</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, Git branch and Git Workflow
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bash</ListTitle>
          <ListParagraph>
            Experience with <br />
            Bash and Unix
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Small Experience with <br />
            Python Algo
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>    
  </Section>
);

export default Technologies;
