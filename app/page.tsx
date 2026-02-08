import AboutMe from '@/components/sections/AboutMe';
import WorkExperience from '@/components/sections/WorkExperience';
import SkillsAchievements from '@/components/sections/SkillsAchievements';
import Contact from '@/components/sections/Contact';
import Studies from '@/components/sections/Studies';

export default function CV() {
    return (
        <main>
            <AboutMe />
            <Studies />
            <WorkExperience />
            <SkillsAchievements />
            <Contact linkForCv />
        </main>
    );
}
