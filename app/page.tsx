import AboutMe from '@/components/sections/AboutMe';
import SkillsAchievements from '@/components/sections/SkillsAchievements';
import Contact from '@/components/sections/Contact';
import HeroSection from '@/components/sections/Hero';
import EducationAndPractice from '@/components/sections/EducationAndPractice';

export default function CV() {
    return (
        <main>
            <HeroSection />
            <AboutMe />
            <EducationAndPractice />
            <SkillsAchievements />
            <Contact linkForCv />
        </main>
    );
}
