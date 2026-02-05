import { FC } from 'react';
import Achievements from '../Achievements';
import Skills from '../Skills';

const SkillsAchievements: FC = () => {
    return (
        <article
            className="mt-12 mb-12 flex flex-col md:flex-row md:justify-around gap-5 w-full justify-center px-6"
            id="skills-and-achievements"
        >
            <Skills />
            <Achievements />
        </article>
    );
};

export default SkillsAchievements;
