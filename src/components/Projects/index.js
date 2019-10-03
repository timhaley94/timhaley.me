import React, { useState } from 'react';
import { Project, SecondaryButton, Section } from '..';
import styles from './index.module.css';

const projects = [
  {
    emoji: {
      value: '🗳️',
      alt: 'ballot-box'
    },
    title: 'Election Simulator',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum sit amet nibh eu mattis. Phasellus lacinia magna at ex faucibus, ut semper nisi condimentum. Cras convallis accumsan faucibus. Fusce egestas viverra ultricies. Curabitur eget augue pellentesque, gravida orci tempor, sollicitudin ante.
    `,
    sourceUrl: 'https://github.com/timhaley94/election_simulator/',
    url: 'https://election-simulator.netlify.com/',
    tags: [
      'Frontend',
      'Data',
      'Political Science'
    ]
  },
  {
    emoji: {
      value: '🃏',
      alt: 'joker'
    },
    title: 'Five Card Draw',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum sit amet nibh eu mattis. Phasellus lacinia magna at ex faucibus, ut semper nisi condimentum. Cras convallis accumsan faucibus. Fusce egestas viverra ultricies. Curabitur eget augue pellentesque, gravida orci tempor, sollicitudin ante.
    `,
    sourceUrl: 'https://github.com/timhaley94/five_card_draw',
    tags: [
      'Full Stack',
      'Multiplayer',
      'Gaming'
    ]
  }
];

function Projects() {
  const [tags, setTags] = useState([]);
  const onAddTag = tag => setTags([tag, ...tags]);
  const onRemoveTag = tag => setTags(tags.filter(t => t !== tag));

  const mappedProjects = (
    projects
      .filter(project => {
        return tags.every(tag => project.tags.includes(tag));
      })
      .map(project => (
        <Project
          { ...project }
          onAddTag={ onAddTag }
        />
      ))
  );

  const headerChildren = (
    <div className={ styles.tags }>
      {
        tags.map(tag => (
          <SecondaryButton className={ styles.tag } onClick={ () => onRemoveTag(tag) }>
            { tag }
          </SecondaryButton>
        ))
      }
    </div>
  );

  return (
    <Section title="Projects" anchor="projects" headerChildren={ headerChildren }>
      { mappedProjects }
    </Section>
  );
}

export default Projects;
