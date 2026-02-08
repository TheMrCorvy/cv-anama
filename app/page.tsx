import AboutMe from '@/components/sections/AboutMe';
import SkillsAchievements from '@/components/sections/SkillsAchievements';
import Contact from '@/components/sections/Contact';
import Studies from '@/components/sections/Studies';
import HeroSection from '@/components/sections/Hero';

export default function CV() {
    return (
        <main>
            <HeroSection />
            <AboutMe />
            <Studies />
            <SkillsAchievements />
            <Contact linkForCv />
        </main>
    );
}
