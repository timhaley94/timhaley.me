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
      A data visualization and simulation project that is designed to demonstrate
      a finding in political science called Duverger's Law. This project was a chance
      to tie together two things I love: data and social science.
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
      value: '🤖',
      alt: 'robot'
    },
    title: 'Markov Maps',
    description: `
      A data visualization tool that allows you to build a map, using drag and drop,
      that represents a markov decision process. You can then have a Q-Learning agent
      explore the map until it converges on a solution.
    `,
    sourceUrl: 'https://github.com/timhaley94/markov_maps',
    url: 'https://markov-maps.netlify.com/',
    tags: [
      'Frontend',
      'Data',
      'Machine Learning'
    ]
  },
  {
    emoji: {
      value: '🐉',
      alt: 'dragon'
    },
    title: 'Dungeon Generator',
    description: `
      A simple browser video game that allows you explore a randomly generated
      "dungeon" searching for the exit. The dungeons are generated using a
      modified random walk algorithm.
    `,
    sourceUrl: 'https://github.com/timhaley94/dungeons',
    url: 'https://dungeon-gen.netlify.com/',
    tags: [
      'Frontend',
      'Gaming',
      'Content Generation'
    ]
  },
  {
    emoji: {
      value: '🃏',
      alt: 'joker'
    },
    title: 'Five Card Draw',
    description: `
      An online, multiplayer implementation of five card draw built with Elixir
      and the Phoenix framework. Backend is wrapping up development and a web
      client will be built afterwards.
    `,
    sourceUrl: 'https://github.com/timhaley94/five_card_draw',
    tags: [
      'Full Stack',
      'Gaming',
      'Multiplayer'
    ]
  },
  {
    emoji: {
      value: '🔮‍',
      alt: 'crystal-ball'
    },
    title: 'Portofolio Site',
    description: `
      The site you are viewing! I used the
      wonderful React based static site generator, Gatsby. The site was
      created without using a premade theme, so it was mostly a design challenge.
    `,
    sourceUrl: 'https://github.com/timhaley94/timhaley.me',
    tags: [
      'Frontend',
      'Design'
    ]
  },
];

function Projects() {
  const [tags, setTags] = useState([]);
  const onAddTag = tag => setTags(
    !tags.includes(tag)
      ? [tag, ...tags]
      : tags
  );
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
