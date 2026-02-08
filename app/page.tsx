import AboutMe from '@/components/sections/AboutMe';
import WorkExperience from '@/components/sections/WorkExperience';
import SkillsAchievements from '@/components/sections/SkillsAchievements';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function CV() {
    return (
        <main>
            <Navbar />
            <AboutMe />
            <WorkExperience />
            <SkillsAchievements />
            <Contact linkForCv />
            <Footer />
        </main>
    );
}
