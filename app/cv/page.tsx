import AboutMe from '@/components/sections/AboutMe';
import WorkExperience from '@/components/sections/WorkExperience';
import SkillsAchievements from '@/components/sections/SkillsAchievements';
import Contact from '@/components/sections/Contact';

export default function CV() {
    return (
        <main>
            <AboutMe />
            <WorkExperience />
            <SkillsAchievements />
            <Contact />
        </main>
    );
}
