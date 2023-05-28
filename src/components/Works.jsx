import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { github, webWhite } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  page,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="bg-tertiary rounded-2xl p-5 sm:w-[360px] h-[500px] w-full flex flex-col justify-between">
        <div className="relative w-full h-[230px]">
          {' '}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full cursor-pointer"
            >
              <img className="" src={github} alt="github" />
            </div>

            <div
              onClick={() => window.open(page, '_blank')}
              className="black-gradient w-10 h-10 rounded-full cursor-pointer flex justify-center items-center ml-1"
            >
              <img
                className="rounded-full w-[78%] h-[78%]"
                src={webWhite}
                alt="github"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold text-start">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <p key={t.name} className={`text-[14px] ${t.color}`}>
              {t.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Alguns dos meus projetos</p>
        <h2 className={styles.sectionHeadText}>Projetos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Aqui você encontrará alguns dos meus projetos mais recentes em
        desenvolvimento web e as tecnologias utilizadas. No card de cada projeto
        está o link do projeto para testar e experimentar, bem como ao link do
        GitHub para ver o código fonte e acompanhar o desenvolvimento.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
